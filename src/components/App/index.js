import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { SprayGate, SprayInfo } from '../SprayGate';
import { ROI, ROIInfo } from '../ROI';

import { setError,
	 selectErrorOccured,
	 selectError,
	 selectLoading,
	 setData } from '../../redux/data';

const App = () => {
    const dispatch = useDispatch();

    const errorOccured = useSelector(selectErrorOccured);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

    const DATA_URL = `${process.env.PUBLIC_URL}/data.json`;
    useEffect(() => {
	fetch(DATA_URL)
	    .then((data) => data.json())
	    .then((data) => dispatch(setData(data)))
	    .catch((error) => {
		console.error(error);
		dispatch(setError(error))
	    });
    }, [dispatch, DATA_URL]);

    if (loading) {
	return <div className="spinner-border" role="status">
		   <span className="visually-hidden">Loading...</span>
	       </div>;
    }
    if (errorOccured) {
	return <pre> Error: {JSON.stringify(error)} </pre>;
    }

    return <Router>
	       <div className="container">
		   <Switch>
		       <Route path="/roi">
			   <ROI />
			   <Link to="/roi-info"> ROI Info</Link>
		       </Route>
		       <Route path="/roi-info">
			   <ROIInfo />
			   <Link to="/roi"> ROI </Link>
			   <Link to="/spray-results"> Spray Results</Link>
		       </Route>
		       <Route path="/spray-results">
			   <h1> Should I Spray? </h1>
			   <h2> Results </h2>
			   <SprayInfo />
			   <Link to="/spray-gate"> Spray Info</Link>
			   <Link to="/roi-info"> ROI </Link>
		       </Route>
		       <Route path="/spray-gate">
			   <h1> Should I Spray? </h1>
			   <p> Deciding to spray fungicides to control rust is
			       dependent on several factors including age of the plant, susceptibility to rust,
			       presence of rust if the field, and conducive environment. Below please enter the
			       current growth stage of your crop, current rust pressure, and what variety you
			       are using along with the nearest PAT location. The location and variety
			       combination will allow us to determine if your variety is susceptible to your
			   local rust population.  </p>
			   <SprayGate />
			   <Link to="/spray-results"> Spray Results</Link>
			   <Link to="/"> Welcome </Link>
		       </Route>
		       <Route path="/">
			   <h1> Rust Spray Calculator</h1>
			   <p>
			   <a
			       href="https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_e31432ab4564440d86637434fe1dd580.pdf">
			       Soybean rust
			   </a>&nbsp;
			   is a foliar disease that can
			   have devastating impacts on soybean production
			   causing up
			   to 80% reductions in yield in conducive
			   environments. The impact of this disease is highly
			   reliant on conducive environments. Prolonged periods
			   of relative humidity and warmer temperatures are
			   ideal for soybean rust. Resistant varieties are
			   recommended to control soybean rust, but when
			   resistant varieties are not available applying
			   fungicides may be an effective control method.
			   </p>

			   <p>
			   The Rust Spray Calculator was designed to aid in
			   environmentally responsible and economically feasible
			   decision making and gives you a concise decision on
			   whether to spray fungicides to control rust
			   outbreaks. First the calculator determines if you
			   should consider spraying based on maturity of your
			   crop, susceptibility, and rust presence and then
			   determines the economic gain you will achieve by
			   considering the cost of fungicide application and
			   price of grain.
			   </p>

			   <h2>Fungicide Safety</h2>
			   <p>There are environmental and human
			   health hazards when spraying fungicides. Please take
			   our SIL-U course on pesticide safety before applying
			   fungicides to your fields.
			       </p>

			       <p>
			   <h2>Avoiding Fungicide Resistance</h2> Misuse, including
			   overuse, of fungicides can result in the pathogen
			   that causes soybean rust developing resistance to
			   fungicides. To avoid fungicide resistance, only spray
			   when necessary, follow the label instruction for that
			   fungicide, and use several modes of action. A mixture
			   of strobilurins and triazoles is recommended for
			   effective rust control. Please consult your extension
			   agent on what products are registered in your area.
			       </p>
			   <Link to="/spray-gate">Spray Gate </Link>
		       </Route>
		   </Switch>
	       </div>
	   </Router>;

}

export default App;
