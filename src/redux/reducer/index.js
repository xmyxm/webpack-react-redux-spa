import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

//import fetchData from './fetch-reducer.js';
import DetailData from '../../component/detail/detail_reducer.js';
import HeaderData from '../../component/header/header_reducer.js';
import ListData from '../../component/list/list_reducer.js';
import SearchData from '../../component/search/search_reducer.js';

export default combineReducers({
	DetailData,//所有的 reducer 都放在这里
	HeaderData,
	ListData,
	SearchData,
    routing: routerReducer
});



