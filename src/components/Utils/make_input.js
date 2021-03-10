import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const MakeInput = ({name, state, set, units, formatter, children, labelClassNames, inputClassNames}) => { 
    const dispatch = useDispatch();
    const [input, setInput] = useState(state);
    const [focused, setFocused] = useState(false);
    useEffect(() => {
	let parsed = Number.parseFloat(input);
	if (!isNaN(parsed) && parsed && parsed !== state) {
	    dispatch(set(parsed));
	}
    }, [dispatch, state, set, input]);

    if (!formatter) {
	formatter = (a) => a;
    }

    return <>
	<label className={labelClassNames} htmlFor={name}> {children} </label>
	<div style={{"whiteSpace": "nowrap"}} className={inputClassNames}>
	<input style={{"width": "5rem"}} name={name} value={focused ? input : formatter(input)} onBlur={(e) => setFocused(false)} onFocus={(e) => setFocused(true)} onChange={e => setInput(e.target.value)} />
	<span className="units"> {units} </span>
	</div>
	</>;
};
