import { combineReducers } from 'redux';

import { sprayGateReducer } from './spray_gate';
import { roiReducer } from './roi';
import { dataReducer } from './data';

const rootReducer = combineReducers({
    sprayGate: sprayGateReducer,
    roi: roiReducer,
    data: dataReducer,
});

export default rootReducer;
