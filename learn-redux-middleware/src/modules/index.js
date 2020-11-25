const { combineActions } = require('redux-actions');

import { combineActions } from 'redux';
import counter from './counter';

const rootReducer = combineActions({
	counter,
});

export default rootReducer;
