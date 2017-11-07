import {LIST_REQUEST_POSTS, LIST_RESOLVE_POSTS, LIST_REJECT_POSTS} from './list_action.js'

const defaultlState = {'Json': {},'istrue':false, 'isFetching': false};
//首次渲染时获取数据
const ListData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case LIST_REQUEST_POSTS:
            return {'Json':{},'isFetching':true,'param':action.param};
        case LIST_RESOLVE_POSTS://debugger;
            return Object.assign({}, state, {'Json':action.json,'istrue':true,'isFetching':false});//请求成功,返回一个新的state
        case LIST_REJECT_POSTS:
            return Object.assign({}, state, {'Json': {},'istrue':false,'isFetching':false});//请求失败，返回一个新的state
        default:
            return state;
    }
}

export default ListData;

