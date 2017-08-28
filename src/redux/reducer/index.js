import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import fetchData from './fetch-reducer.js';

export default combineReducers({
	fetchData,//所有的 reducer 都放在这里
    routing: routerReducer
});



