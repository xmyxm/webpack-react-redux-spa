import {SEARCH_REQUEST_POSTS, SEARCH_RESOLVE_POSTS, SEARCH_REJECT_POSTS} from './search_action.js'

const defaultlState = {'Json': {},'istrue':false, 'isFetching': false};
//首次渲染时获取数据
const SearchData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case SEARCH_REQUEST_POSTS:
            return {'Json':{},'isFetching':true,'param':action.param};
        case SEARCH_RESOLVE_POSTS://debugger;
            return Object.assign({}, state, {'Json':action.json,'istrue':true,'isFetching':false});//请求成功,返回一个新的state
        case SEARCH_REJECT_POSTS:
            return Object.assign({}, state, {'Json': {},'istrue':false,'isFetching':false});//请求失败，返回一个新的state
        default:
            return state;
    }
}

export default SearchData;

