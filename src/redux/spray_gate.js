/* State */
//================================================================================
export const sprayGateInitialState = {
    growthStageOptions: ["Early vegetative",
			 "Late vegetative (pod-filling) R1-R6",
			 "Beginning maturity"],
    rustPresenceOptions: ["No rust present in field",
			  "No rust present in field but spotted within 100km",
			  "<10% disease observed on lower canopy and nowhere else on the plant",
			  "<20% disease observed on the lower canopy and <10% disease in mid-canopy",
			  ">10% disease observed in mid-canopy and anywhere in the upper canopy"],
    country: undefined,
    state: undefined,
    variety: undefined,
    growthStageSelection: 0,
    rustPresenceSelection: 0,
};
/* Actions */
//================================================================================
const SET_RUST_PRESENCE_SELECTION_INDEX = "sprayGate/setRustPresenceSelection";
const SET_GROWTH_STAGE_SELECTION_INDEX = "sprayGate/setGrowthStageSelection";
const SET_COUNTRY = "sprayGate/setCountry";
const SET_STATE = "sprayGate/setState";
const SET_VARIETY = "sprayGate/setVariety";

export function setRustPresenceSelection(value) {
    return {
	type: SET_RUST_PRESENCE_SELECTION_INDEX,
	value: value
    };
}
export function setGrowthStageSelection(value) {
    return {
	type: SET_GROWTH_STAGE_SELECTION_INDEX,
	value: value
    };
}
export function setCountry(value) {
    return {
	type: SET_COUNTRY,
	value: value
    };
}
export function setState(value) {
    return {
	type: SET_STATE,
	value: value
    };
}
export function setVariety(value) {
    return {
	type: SET_VARIETY,
	value: value
    };
}
/* Selectors */
//================================================================================
export const selectGrowthStageOptions = (s) => s.sprayGate.growthStageOptions;
export const selectGrowthStageSelection= (s) => s.sprayGate.growthStageSelection;

export const selectRustPresenceOptions = (s) => s.sprayGate.rustPresenceOptions;
export const selectRustPresenceSelection= (s) => s.sprayGate.rustPresenceSelection;

export const selectCountry = (s) => s.sprayGate.country;
export const selectState = (s) => s.sprayGate.state;
export const selectVariety = (s) => s.sprayGate.variety;

export const getShouldSpray = (stage, presence, sus) => {
    let shouldSpray;
    let why;
    if (sus === "Susceptible") {
	switch (stage) {
	case sprayGateInitialState.growthStageOptions[0]:
	    switch (presence) {
	    case sprayGateInitialState.rustPresenceOptions[0]:
		shouldSpray = false;
		break;
	    case sprayGateInitialState.rustPresenceOptions[1]:
		shouldSpray = false;
		break;
	    case sprayGateInitialState.rustPresenceOptions[2]:
	    case sprayGateInitialState.rustPresenceOptions[3]:
		case sprayGateInitialState.rustPresenceOptions[4]:
		shouldSpray = false;
		break;

	    }
	    break;
	case sprayGateInitialState.growthStageOptions[1]:
	    switch (presence) {
	    case sprayGateInitialState.rustPresenceOptions[0]:
		shouldSpray = false;
		break;
	    case sprayGateInitialState.rustPresenceOptions[1]:
		shouldSpray = false;
		break;
	    case sprayGateInitialState.rustPresenceOptions[2]:
		shouldSpray = true;
		why = "Spraying a fungicide may suppress rust outbreak and significantly increase yields";
		break;
	    case sprayGateInitialState.rustPresenceOptions[3]:
		shouldSpray = true;
		why = "Spraying a fungicide may suppress rust outbreak and significantly increase yields";
		break;
		case sprayGateInitialState.rustPresenceOptions[4]:
		shouldSpray = false;
		break;

	    }
	    break;
	case sprayGateInitialState.growthStageOptions[0]:
	    shouldSpray = false;
	    break;
	}

    } else if (sus === "Unknown") {
	shouldSpray = false;
	why = "There is no data about this variety/location";
    } else {
	shouldSpray = false;
	why = "There is no evidence applying fungicides to a resistant cultivar is an economically viable option.";
    }
    return {
	shouldSpray, why
    };
}

/* Reducer */
//================================================================================
export function sprayGateReducer(state = sprayGateInitialState, action) {
    switch (action.type) {
    case SET_RUST_PRESENCE_SELECTION_INDEX:
	state.rustPresenceSelection= action.value;
	break;
    case SET_GROWTH_STAGE_SELECTION_INDEX:
	state.growthStageSelection= action.value;
	break;
    case SET_COUNTRY:
	if (state.country !== action.value) {
	    state.state = undefined;
	}
	state.country = action.value;
	break;
    case SET_STATE:
	if (state.state !== action.value) {
	    state.variety = undefined;
	}
	state.state = action.value;
	break;
    case SET_VARIETY:
	state.variety = action.value;
	break;
    default:
	break;
    }
    return state;
}
