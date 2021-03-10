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

export const selectSeasons = s => Object.keys(s.data.data);
// This may be a bad idea, but I'm gonna try it (I mean referring to external data)
export const selectValidLocations = s => {
    if (!s.sprayGate.season) {
	return [];
    }
    return Object.keys(s.data.data[s.sprayGate.season]);
}
export const selectValidVarieties = s => {
    if (!s.sprayGate.season || !s.sprayGate.location) {
	return [];
    }
    return Object.keys(s.data.data[s.sprayGate.season][s.sprayGate.location]);
};
export const selectSeasonLocationVarietySusceptible = (se, lo, va) => s => {
    const d = s.data.data;
    if (d[se] && d[se][lo]) {
	return d[se][lo][va] === "Susceptible";
    }
    return undefined;
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
