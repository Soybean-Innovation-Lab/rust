/* State */
//================================================================================
export const sprayGateInitialState = {
    growthStageOptions: ["Early vegetative",
			 "Late vegetative-R6",
			 "Beginning maturity"],
    rustPresenceOptions: ["No rust present",
			  "No rust present but spotted within 100km",
			  "<10% rust on lower canopy",
			  "<10% rust on mid-canopy",
			  "rust present on upper canopy"],
    season: undefined,
    location: undefined,
    variety: undefined,
    growthStageSelection: 0,
    rustPresenceSelection: 0,
};
/* Actions */
//================================================================================
const SET_RUST_PRESENCE_SELECTION_INDEX = "sprayGate/setRustPresenceSelection";
const SET_GROWTH_STAGE_SELECTION_INDEX = "sprayGate/setGrowthStageSelection";
const SET_LOCATION = "sprayGate/setLocation";
const SET_VARIETY = "sprayGate/setVariety";
const SET_SEASON = "sprayGate/setSeason";

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
export function setLocation(value) {
    return {
	type: SET_LOCATION,
	value: value
    };
}
export function setVariety(value) {
    return {
	type: SET_VARIETY,
	value: value
    };
}
export function setSeason(value) {
    return {
	type: SET_SEASON,
	value: value
    };
}
/* Selectors */
//================================================================================
export const selectGrowthStageOptions = (s) => s.sprayGate.growthStageOptions;
export const selectGrowthStageSelection= (s) => s.sprayGate.growthStageSelection;

export const selectRustPresenceOptions = (s) => s.sprayGate.rustPresenceOptions;
export const selectRustPresenceSelection= (s) => s.sprayGate.rustPresenceSelection;

export const selectLocation = (s) => s.sprayGate.location;
export const selectVariety = (s) => s.sprayGate.variety;
export const selectSeason = (s) => s.sprayGate.season;

export const getShouldSpray = (stage, presence, sus) => {
    let shouldSpray;
    let why;
    if (sus) {
	switch (stage) {
	case sprayGateInitialState.growthStageOptions[0]:
	    switch (presence) {
	    case sprayGateInitialState.rustPresenceOptions[0]:
		shouldSpray = false;
		why = "There is no current threat of a rust outbreak";
		break;
	    case sprayGateInitialState.rustPresenceOptions[1]:
		shouldSpray = false;
		why = "Rust spores are windborne and can travel quickly given conducive conditions. Increase scouting and prepare to spray if rust is identified in your fields";
		break;
	    case sprayGateInitialState.rustPresenceOptions[2]:
	    case sprayGateInitialState.rustPresenceOptions[3]:
	    case sprayGateInitialState.rustPresenceOptions[4]:
		shouldSpray = false;
		why = "Before plants reach R1, there is no major threat to yield. If conditions stay conducive and disease progresses consider spraying at late vegetative stage";
		break;

	    }
	    break;
	case sprayGateInitialState.growthStageOptions[1]:
	    switch (presence) {
	    case sprayGateInitialState.rustPresenceOptions[0]:
		shouldSpray = false;
		why = "There is no current threat of a rust outbreak";
		break;
	    case sprayGateInitialState.rustPresenceOptions[1]:
		shouldSpray = false;
		why = "Rust spores are windborne and can travel quickly given conducive conditions. Increase scouting and prepare to spray if rust is identified in your fields";
		break;
	    case sprayGateInitialState.rustPresenceOptions[2]:
	    case sprayGateInitialState.rustPresenceOptions[3]:
		shouldSpray = true;
		why = "Spraying a fungicide may suppress rust outbreak and significantly increase yields";
		break;
	    case sprayGateInitialState.rustPresenceOptions[4]:
		shouldSpray = false;
		why = "The infection is too severe and spraying is no longer economically viable";
		break;

	    }
	    break;
	case sprayGateInitialState.growthStageOptions[0]:
	    shouldSpray = false;
	    why = "Spraying nearing or after pods are full will not be an economically viable option since it will not have an impact on yields";
	    break;
	}

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
    case SET_LOCATION:
	state.location = action.value;
	break;
    case SET_VARIETY:
	state.variety = action.value;
	break;
    case SET_SEASON:
	state.season = action.value;
	break;
    default:
	break;
    }
    return state;
}
