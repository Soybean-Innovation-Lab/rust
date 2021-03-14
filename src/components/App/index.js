import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { SprayGate } from '../SprayGate';
import { ROI } from '../ROI';

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
			   <Link to="/spray-gate"> Spray Gate</Link>
           </Route>
		       <Route path="/spray-gate">
			   <SprayGate />
			   <Link to="/roi"> ROI </Link>
			   <Link to="/roi"> Welcome </Link>
		       </Route>
		       <Route path="/">
			   <h1> Welcome</h1>
			   <Link to="/spray-gate">Spray Gate </Link>
		       </Route>
		   </Switch>
	       </div>
	   </Router>;

}

export default App;
