export const SET_DATA = "data/setData";
const SET_ERROR = "data/setError";

/* State */
//================================================================================
const initialState = {
    loading: true,
    errorOccured: false,
};
/* Actions */
//================================================================================
export function setData(data) {
    return {
	type: SET_DATA,
	value: data
    };
}
export function setError(error) {
    return {
	type: SET_ERROR,
	value: error
    };
}
/* Selectors */
//================================================================================
export const selectError = s => s.data.error;
export const selectErrorOccured = s => s.data.errorOccured;
export const selectLoading = s => s.data.loading;

// This may be a bad idea, but I'm gonna try it (I mean referring to external data)
export const selectValidCountries = s => {
    let out = new Set();
    for (let season in s.data.data) {
	Object.keys(s.data.data[season]).forEach(out.add, out);
    }
    return [...out];
}
// This may be a bad idea, but I'm gonna try it (I mean referring to external data)
export const selectValidStates = c => s => {
    let out = new Set();
    for (let season in s.data.data) {
	if (c in s.data.data[season]) {
	    Object.keys(s.data.data[season][c]).forEach(out.add, out);
	}
    }
    return [...out];
}
export const selectValidVarieties = s => {
    if (!s.sprayGate.country && s.sprayGate.state) {
	return [];
    }
    let out = [];
    for (let season in s.data.data) {
	if (!(s.sprayGate.country in s.data.data[season] && s.sprayGate.state in s.data.data[season][s.sprayGate.country])) {
	    continue;
	}
	out = out.concat(Object.keys(s.data.data[season][s.sprayGate.country][s.sprayGate.state]));
    }
    return out;
};
const compareSeasons = (a,b) => {
    const sa = a.split("/");
    const sb = b.split("/");
    const la = sa.length;
    const lb = sb.length;

    const aa = sa.reduce((a, b) => a + b)/la;
    const ab = sa.reduce((a, b) => a + b)/lb;

    return ab - aa;
}
export const selectLocationVarietySusceptible = (co, st, va) => s => {
    if (!co || !st || !va) {
	return [undefined, undefined];
    }
    const d = s.data.data;
    for (let se of Object.keys(s.data.data).sort(compareSeasons)) {
	if (d[se][co] && d[se][co][st] && d[se][co][st][va]) {
	    return [d[se][co][st][va], se];
	}
    }
    return [undefined, undefined];
};

/* Reducer */
//================================================================================
export function dataReducer(state=initialState, action) {
    switch (action.type) {
    case SET_DATA:
	state.data = action.value;
	state.loading = false;
	break;
    case SET_ERROR:
	state.errorOccured = true;
	state.error = action.value;
	state.loading = false;
	break;
    default:
	break;
    }
    return state;
}
