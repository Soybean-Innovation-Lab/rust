/* State */
//================================================================================
export const roiInitialState = {
    costOfFungicide: 24.70,
    costOfLabor: 29.64,
    plotSize: 5,
    priceOfGrain: 400,
};
/* Actions */
//================================================================================
const SET_COST_OF_FUNGICIDE = "roi/setCostOfFungicide";
const SET_COST_OF_LABOR = "roi/setCostOfLabor";
const SET_PLOT_SIZE = "roi/setPlotSize";
const SET_PRICE_OF_GRAIN = "roi/setPriceOfGrain";

export function setCostOfFungicide(value) {
    return {
	type: SET_COST_OF_FUNGICIDE,
	value: value
    };
}
export function setCostOfLabor(value) {
    return {
	type: SET_COST_OF_LABOR,
	value: value
    };
}
export function setPlotSize(value) {
    return {
	type: SET_PLOT_SIZE,
	value: value
    };
}
export function setPriceOfGrain(value) {
    return {
	type: SET_PRICE_OF_GRAIN,
	value: value
    };
}
/* Selectors */
//================================================================================
export const selectCostOfFungicide = (s) => s.roi.costOfFungicide;
export const selectCostOfLabor = (s) => s.roi.costOfLabor;
export const selectPlotSize = (s) => s.roi.plotSize;
export const selectPriceOfGrain = (s) => s.roi.priceOfGrain;

export const selectROIResults = (s) => {
  const priceOfGrain = selectPriceOfGrain(s);
  const plotSize = selectPlotSize(s);
  const costOfFungicide = selectCostOfFungicide(s);
  const costOfLabor = selectCostOfLabor(s);
  let out = [];
  const keys = [
    {
      growthStage: "R1-R2",
      sprays:1,
      avgYield: .4845
    }];
  for (let key of keys) {
    out.push({
      incRev: key.avgYield * priceOfGrain,
      incRevTotal: key.avgYield * priceOfGrain * plotSize,
      revCosts: key.avgYield * priceOfGrain * plotSize - (costOfLabor + costOfFungicide * key.sprays),
      ...key,
    });
  }
  return out;
}

/* Reducer */
//================================================================================
export function roiReducer(state = roiInitialState, action) {
    switch (action.type) {
    case SET_COST_OF_LABOR:
	state.costOfLabor = action.value;
	break;
    case SET_PLOT_SIZE:
	state.plotSize = action.value;
	break;
    case SET_PRICE_OF_GRAIN:
	state.priceOfGrain = action.value;
	break;
    case SET_COST_OF_FUNGICIDE:
	state.costOfFungicide = action.value;
	break;
    default:
	break;
    }
    return state;
}
