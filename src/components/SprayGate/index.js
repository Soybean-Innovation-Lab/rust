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
export const SprayInfo = () => {
    const presence = useSelector(selectRustPresenceSelection);
    const stage = useSelector(selectGrowthStageSelection);
    const location = useSelector(selectLocation);
    const variety = useSelector(selectVariety);

    const [sus, season] = useSelector(selectLocationVarietySusceptible(location, variety));

    const shouldSpray = getShouldSpray(stage, presence, sus);
    return <div>
	       <h1>
		   You should {!shouldSpray.shouldSpray && "not"} spray
	       </h1>
	       <p>
		   {shouldSpray.why}
	       </p>
	       <p>
		   Please keep in mind that spraying as well as the number of times you spray is
		   dependent on conducive conditions for the disease. These recommendations are
		   given based on the assumption of continued conducive environments and disease
		   progression.
	       </p>
	   </div>;
}
export const SprayGate = () => {
    const location = useSelector(selectLocation);
    const variety = useSelector(selectVariety);

    const [sus, trialSeason] = useSelector(selectLocationVarietySusceptible(location, variety));
    let susText = sus ? "sot resistant!" : "resistant!";
    let susNode = <>
		      <h1> {variety} showed a {sus ? "TAN" : "RB"} during the&nbsp;
			  {trialSeason} season at the {location} PAT
			  location. This indicated this variety is {sus ?
			  "susceptible" : "resistant"} to this location's rust
		      population. </h1>
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
	       <label htmlFor="rustPresence"> Rust Pressure: </label>
	       <GeneralSelector name="rustPresence"
				valSelector={selectRustPresenceSelection}
				optionsSelector={selectRustPresenceOptions}
				action={setRustPresenceSelection} />
	       <label htmlFor="location"> Nearest PAT Location: </label>
	       <GeneralSelector name="location"
				valSelector={selectLocation}
				optionsSelector={selectValidLocations}
				action={setLocation} />
	       <label htmlFor="variety"> Soybean Variety: </label>
	       <GeneralSelector name="variety"
				valSelector={selectVariety}
				optionsSelector={selectValidVarieties}
				action={setVariety} />
	       {susNode}
	       <p> Is your variety not listed? We may not have sufficient data
	       to confirm resistance or susceptibility of a variety in your
	       location. If you are interested in a variety not included on the
	       list above, please contact us at <a
	       href="mailto:soybeaninnovationlab@illinois.edu">soybeaninnovationlab@illinois.edu</a>
	       </p>
	   </div>;
};
