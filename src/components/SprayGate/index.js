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

const GeneralSelector = ({name, valSelector, optionsSelector, action, className}) => {
    const dispatch = useDispatch();

    const idx = useSelector(valSelector);
    const options = useSelector(optionsSelector);
    let temp = undefined;
    if ((!idx || !options.includes(idx)) && options.length > 0) {
	temp = options[0];
    }
    useEffect(() => { if (temp) dispatch(action(temp))}, [temp]);
    return <select name={name}
		   className={`form-select ${className}` }
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
    <div className="border border-3 shadow shadow-3 p-3 mx-auto my-5" style={{"width":"max-content"}}>
	       <h2 className="text-center">
		   You should {!shouldSpray.shouldSpray && "not"} spray
	       </h2>
	       <p className="text-center">
		   {shouldSpray.why}
	       </p>
         </div>
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
    let susNode = <div className={`border border-3 ${sus ? "border-danger" : "border-success"} shadow shadow-4 p-3 mt-3 text-center`}>
		      <p className="fs-2 m-0"> <span className="text-decoration-underline">{variety}</span> showed a &nbsp;
          <span className="text-decoration-underline">{sus ? "TAN" : "RB"}</span>&nbsp;
           reaction during the&nbsp;
			  <span className="text-decoration-underline">{trialSeason}</span> season at the &nbsp;
        <span className="text-decoration-underline">{location}</span> PAT
			  location. </p>
        <p className="fs-2 m-0">This indicated this variety is&nbsp;
        <span className="text-decoration-underline">{sus ? "susceptible" : "resistant"}
        </span> to this location's rust
		      population. </p>
		  </div>;
    if (sus === undefined) {
	susNode = <> </>;
    }
    return <div className="mb-3">
	       <div className="border border-3 shadow shadow-4 p-3">
		   <div className="row">
		       <label className="col-md my-auto" htmlFor="growthStage"> Growth Stage: </label>
		       <GeneralSelector className="col-md"  name="growthStage"
					valSelector={selectGrowthStageSelection}
					optionsSelector={selectGrowthStageOptions}
					action={setGrowthStageSelection} />
		   </div>
		   <div className="row">
		       <label className="col-md my-auto" htmlFor="rustPresence"> Rust Pressure: </label>
		       <GeneralSelector className="col-md" name="rustPresence"
					valSelector={selectRustPresenceSelection}
					optionsSelector={selectRustPresenceOptions}
					action={setRustPresenceSelection} />
		   </div>
		   <div className="row">
		       <label className="col-md my-auto" htmlFor="location"> Nearest PAT Location: </label>
		       <GeneralSelector className="col-md" name="location"
					valSelector={selectLocation}
					optionsSelector={selectValidLocations}
					action={setLocation} />
		   </div>
		   <div className="row">
		       <label htmlFor="variety" className="col-md my-auto"> Soybean Variety: </label>
		       <GeneralSelector
			   className="col-md"
			   name="variety"
			   valSelector={selectVariety}
			   optionsSelector={selectValidVarieties}
			   action={setVariety} />
		   </div>
	       </div>
	       {susNode}
	   </div>;
};
