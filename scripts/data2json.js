#!/bin/env node
/*
  Very basic utility to transform data from a tsv with (at least) columns
  "Bundle" and "Location" to a json object with first key being the location and
  second key being bundle and the rest of the data after that
*/

let proc = require("process");
let fs = require("fs");
let Papa = require("papaparse");

if (proc.argv.length != 3) {
    console.error(`USAGE: ${proc.argv[0]} ${proc.argv[1]} DATA_FILE`);
    proc.exit(1);
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
	let seasons = new Set(results.data.map((r) => new String(r["Season"])));
	let locations = new Set(results.data.map((r) => new String(r["Location"])));
	for (season of seasons) {
	    out[season] = {};
	    for (loc of locations) {
		out[season][loc] = {};
	    }
	}
	for (let row of results.data) {
	    let loc = row["Location"];
	    let season = row["Season"];
	    let v = row["Variety"];
	    out[season][loc][v] = row["Disease Response"];
	}
	//console.log((out));
	console.log(JSON.stringify(out));
    }
});
