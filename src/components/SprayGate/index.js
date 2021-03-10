import { useSelector, useDispatch } from 'react-redux';

import {
    setRustPresenceSelection,
    setGrowthStageSelection,
    setLocation,
    setVariety,
    setSeason,
    selectRustPresenceOptions,
    selectGrowthStageOptions,
    selectRustPresenceSelection,
    selectGrowthStageSelection,
    selectSeason,
    selectLocation,
    selectVariety,
    getShouldSpray, 
} from '../../redux/spray_gate';

import {
    selectSeasons,
    selectValidLocations,
    selectValidVarieties,
    selectSeasonLocationVarietySusceptible
} from '../../redux/data';

const GeneralSelector = ({valSelector, optionsSelector, action}) => {
    const dispatch = useDispatch();

    const idx = useSelector(valSelector);
    const options = useSelector(optionsSelector);
    if ((!idx || !options.includes(idx)) && options.length > 0) {
	dispatch(action(options[0]));
    }
    return <select className="form-select"
		   onChange={(e) => dispatch(action(e.target.value))}
		   value={idx}
	   >
	       {options.map((o) => <option key={o} value={o}> {o} </option>)}
	   </select>;
}
const SprayInfo = () => {
    const presence = useSelector(selectRustPresenceSelection);
    const stage = useSelector(selectGrowthStageSelection);
    const season = useSelector(selectSeason);
    const location = useSelector(selectLocation);
    const variety = useSelector(selectVariety);

    const sus = useSelector(selectSeasonLocationVarietySusceptible(season, location, variety));

    const shouldSpray = getShouldSpray(stage, presence, sus);
    return <> <h1> You should {!shouldSpray.shouldSpray && "not"} spray </h1>
	   <p> {shouldSpray.why} </p> </>;
}
export const SprayGate = () => {
    const season = useSelector(selectSeason);
    const location = useSelector(selectLocation);
    const variety = useSelector(selectVariety);

    const sus = useSelector(selectSeasonLocationVarietySusceptible(season, location, variety));
    let susText = sus ? "Susceptible!" : "Not Susceptible!";
    return <div>
	       <GeneralSelector valSelector={selectGrowthStageSelection}
				optionsSelector={selectGrowthStageOptions}
				action={setGrowthStageSelection} />
	       <GeneralSelector valSelector={selectRustPresenceSelection}
				optionsSelector={selectRustPresenceOptions}
				action={setRustPresenceSelection} />
	       <GeneralSelector valSelector={selectSeason}
				optionsSelector={selectSeasons}
				action={setSeason} />
	       <GeneralSelector valSelector={selectLocation}
				optionsSelector={selectValidLocations}
				action={setLocation} />
	       <GeneralSelector valSelector={selectVariety}
				optionsSelector={selectValidVarieties}
				action={setVariety} />
	       <h1> Your variety is {susText} </h1>
	       <SprayInfo />
	   </div>;
};
