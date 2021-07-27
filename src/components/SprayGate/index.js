import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    setRustPresenceSelection,
    setGrowthStageSelection,
    setCountry,
    setState,
    setVariety,
    selectRustPresenceOptions,
    selectGrowthStageOptions,
    selectRustPresenceSelection,
    selectGrowthStageSelection,
    selectCountry,
    selectState,
    selectVariety,
    getShouldSpray,
} from '../../redux/spray_gate';

import {
    selectValidCountries,
    selectValidStates,
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
    const country = useSelector(selectCountry);
    const state = useSelector(selectState);
    const variety = useSelector(selectVariety);

    const [sus, season] = useSelector(selectLocationVarietySusceptible(country, state, variety));

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
	Please keep in mind that spraying, as well as the number of times you
    spray, is dependent on conducive conditions for the
    disease. These recommendations are given based on the
    assumption of continued conducive environments and disease
    progression.
	       </p>
	   </div>;
}
export const SprayGate = () => {
    const country = useSelector(selectCountry);
    const state = useSelector(selectState);
    const variety = useSelector(selectVariety);

    const [res, trialSeason] = useSelector(selectLocationVarietySusceptible(country, state, variety));
    let susNode, borderColor;
    if (res === "Unknown") {
	borderColor = "border-warning";
	susNode = <p className="fs-2 m-0"> There is no reaction data for <span className="text-decoration-underline">{variety}</span> at &nbsp; 
		      <span className="text-decoration-underline">{state}, {country}</span> PAT Location. If you have rust reaction data, please contact SIL immediately at <a href="mailto:soybeaninnovationlab@illinois.edu">soybeaninnovationlab@illinois.edu </a>
		  </p>;
    } else {
	let sus = res === "Susceptible";
	borderColor = sus ? "border-danger" : "border-success";
	    susNode = <>
		      <p className="fs-2 m-0"> <span className="text-decoration-underline">{variety}</span> showed a &nbsp;
          <span className="text-decoration-underline">{sus ? "TAN" : "RB"}</span>&nbsp;
           reaction during the&nbsp;
			  <span className="text-decoration-underline">{trialSeason}</span> season at the &nbsp;
			  <span className="text-decoration-underline">{state}, {country} </span> PAT
			  location. </p>
        <p className="fs-2 m-0">This indicated this variety is&nbsp;
        <span className="text-decoration-underline">{sus ? "susceptible" : "resistant"}
        </span> to this location's rust
		      population. </p>
		  </>;
    }
    if (res === undefined) {
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
		       <label className="col-md my-auto" htmlFor="country"> Country: </label>
		       <GeneralSelector className="col-md" name="country"
					valSelector={selectCountry}
					optionsSelector={selectValidCountries}
					action={setCountry} />
		   </div>
		   
		   <div className="row">
		       <label className="col-md my-auto" htmlFor="state"> Nearest PAT Location: </label>
		       <GeneralSelector className="col-md" name="state"
					valSelector={selectState}
					optionsSelector={selectValidStates(country)}
					action={setState} />
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
	       <div className={`border border-3 ${borderColor} shadow shadow-4 p-3 mt-3 text-center`}>
		   {susNode}
	       </div>
	   </div>;
};
