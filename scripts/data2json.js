#!/bin/env node
const proc = require("process");
const fs = require("fs");
const Papa = require("papaparse");
const assert = require("assert");

if (proc.argv.length != 3) {
    console.error(`USAGE: ${proc.argv[0]} ${proc.argv[1]} DATA_FILE`);
    proc.exit(1);
}
function splitLocation(loc) {
    let elems = loc.split(",");
    assert(elems.length == 2);
    return { state: elems[0].trim(), country: elems[1].trim() };
}
let data = Papa.parse(fs.createReadStream(proc.argv[2]), {
    delimiter: "\t",
    header: true,
    dynamicTyping: true,
    error: function(err, file, inputElem, reason)
    {
	console.error(err);
    },
    complete: function(results) {
	if (results.errors.length != 0) {
	    for (let err of results.errors) {
		console.error(err);
	    }
	}
	let out = {};
	let seasons = new Set(results.data.map((r) => r["Season"]));
	let locations = new Set(results.data.map((r) => r["Location"]));
	for (season of seasons) {
	    out[season] = {};
	    for (loc of locations) {
		let { country, state } = splitLocation(loc);
		if (!(country in out[season])) {
		    out[season][country] = {};
		}
		out[season][country][state] = {};
	    }
	}
	for (let row of results.data) {
	    let loc = row["Location"];
	    let { country, state } = splitLocation(loc);
	    let season = row["Season"];
	    let v = row["Variety"];
	    out[season][country][state][v] = row["Disease Response"];
	}
	for (season of seasons) {
	    for (loc of locations) {
		let { country, state } = splitLocation(loc);
		if (season in out && country in out[season] && Object.keys(out[season][country][state]).length === 0) {
		    delete out[season][country][state];
		}
		if (season in out && country in out[season] && Object.keys(out[season][country]).length === 0) {
		    delete out[season][country];
		}
	    }
	}
	//console.log((out));
	console.log(JSON.stringify(out));
    }
});
