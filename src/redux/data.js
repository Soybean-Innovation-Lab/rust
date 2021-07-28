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
