import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import fetchReducer from './fetch-reducer.js';

export default combineReducers({
	fetchReducer,//所有的 reducer 都放在这里
    routing: routerReducer
});



