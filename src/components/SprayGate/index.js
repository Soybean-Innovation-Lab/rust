import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    setRustPresenceSelection,
    setGrowthStageSelection,
    setLocation,
    setVariety,
    selectRustPresenceOptions,
    selectGrowthStageOptions,
    selectRustPresenceSelection,
    selectGrowthStageSelection,
    selectLocation,
    selectVariety,
    getShouldSpray, 
} from '../../redux/spray_gate';

import {
    selectValidLocations,
    selectValidVarieties,
    selectLocationVarietySusceptible
} from '../../redux/data';

const GeneralSelector = ({name, valSelector, optionsSelector, action}) => {
    const dispatch = useDispatch();

    const idx = useSelector(valSelector);
    const options = useSelector(optionsSelector);
    let temp = undefined;
    if ((!idx || !options.includes(idx)) && options.length > 0) {
	temp = options[0];
    }
    useEffect(() => { if (temp) dispatch(action(temp))}, [temp]);
    return <select name={name}
		   className="form-select"
		   onChange={(e) => dispatch(action(e.target.value))}
		   value={idx}
	   >
	       {options.map((o) => <option key={o} value={o}> {o} </option>)}
	   </select>;
}
const SprayInfo = () => {
    const presence = useSelector(selectRustPresenceSelection);
    const stage = useSelector(selectGrowthStageSelection);
    const location = useSelector(selectLocation);
    const variety = useSelector(selectVariety);

    const [sus, season] = useSelector(selectLocationVarietySusceptible(location, variety));

    const shouldSpray = getShouldSpray(stage, presence, sus);
    return <> <h1> You should {!shouldSpray.shouldSpray && "not"} spray </h1>
	   <p> {shouldSpray.why} </p> </>;
}
export const SprayGate = () => {
    const location = useSelector(selectLocation);
    const variety = useSelector(selectVariety);

    const [sus, trialSeason] = useSelector(selectLocationVarietySusceptible(location, variety));
    let susText = sus ? "sot resistant!" : "resistant!";
    let susNode = <>
		      <h1> SIL Smart farm trials in {trialSeason} found your variety {susText} to rust infection</h1>
		      <SprayInfo />
		      </>;
    if (sus === undefined) {
	susNode = <> </>;
    }
    return <div>
	       <label htmlFor="growthStage"> Growth Stage: </label>
	       <GeneralSelector name="growthStage"
				valSelector={selectGrowthStageSelection}
				optionsSelector={selectGrowthStageOptions}
				action={setGrowthStageSelection} />
	       <label htmlFor="rustPresence"> Rust Presence: </label>
	       <GeneralSelector name="rustPresence"
				valSelector={selectRustPresenceSelection}
				optionsSelector={selectRustPresenceOptions}
				action={setRustPresenceSelection} />
	       <label htmlFor="location"> Location: </label>
	       <GeneralSelector name="location"
				valSelector={selectLocation}
				optionsSelector={selectValidLocations}
				action={setLocation} />
	       <label htmlFor="variety"> Variety: </label>
	       <GeneralSelector name="variety"
				valSelector={selectVariety}
				optionsSelector={selectValidVarieties}
				action={setVariety} />
	       {susNode}
	   </div>;
};
