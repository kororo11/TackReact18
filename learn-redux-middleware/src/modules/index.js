const { combineActions } = require('redux-actions');

import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
	counter,
});

export default rootReducer;
