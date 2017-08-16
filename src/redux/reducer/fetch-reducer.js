import {REQUEST_POSTS, RESOLVE_POSTS, REJECT_POSTS} from '../action/fetch-action.js'

const defaultlState = {'data': {},'istrue':false, 'isFetching': false,'page':0,'pageSize':10};
//首次渲染时获取数据
const fetchData = (state = defaultlState , action = {}) => {debugger
    switch(action.type){
        case REQUEST_POSTS:
            return {'data':{},'isFetching':true,'param':action.param,'page':action.page,'pageSize':action.pageSize};
        case RESOLVE_POSTS://debugger;
            state.param.page = action.page;
            return Object.assign({}, state, {'data':action.json,'istrue':true,'isFetching':false});//请求成功,返回一个新的state
        case REJECT_POSTS:
            return Object.assign({}, state, {'data': {},'istrue':false,'isFetching':false});//请求失败，返回一个新的state
        default:
            return state;
    }
}

export default fetchData;

