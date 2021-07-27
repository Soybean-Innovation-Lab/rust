import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setRustPresenceSelection,
    setGrowthStageSelection,
    
    selectRustPresenceOptions,
    selectGrowthStageOptions,
    selectRustPresenceSelection,
    selectGrowthStageSelection,
    
    getShouldSpray,
} from '../../redux/spray_gate';


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


    const sus = "Susceptible";

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
		   
	       </div>
	    
	   </div>;
};
