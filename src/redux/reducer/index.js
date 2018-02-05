import { combineReducers } from 'redux';

import Detail from '../../component/detail/detail_reducer.js';
import Header from '../../component/header/header_reducer.js';
import List from '../../component/list/list_reducer.js';
import Search from '../../component/search/search_reducer.js';

export default combineReducers({
	Detail,
	Header,
	List,
	Search
});



