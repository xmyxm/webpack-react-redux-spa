import {paramToStr} from '../../utils/url-data.js';
import fetch from 'isomorphic-fetch';

export const SEARCH_REQUEST_POSTS = 'SEARCH_REQUEST_POSTS';//发送请求
export const SEARCH_REJECT_POSTS = 'SEARCH_REJECT_POSTS';//失败
export const SEARCH_RESOLVE_POSTS = 'SEARCH_RESOLVE_POSTS';//成功

//开始获取数据
export const requestPosts = (path,param) => {
  return {
    type: SEARCH_REQUEST_POSTS,
    path,
    param
  }
}

//获取数据成功
export const resolvePosts = (path, json) => {
  return {
        type: SEARCH_RESOLVE_POSTS,
        path ,
        json 
    }
}

//获取数据失败
export const rejectPosts = (path, error) => {
  return {
        type: SEARCH_REJECT_POSTS,
        path ,
        error
    }
}

// 页面初次渲染时获取数据
export const fetchPosts = (path, postData) => {
    postData.PageSize = 10
    let url = path + '?' + paramToStr(postData)
    return (dispatch, getState) => {
        dispatch(requestPosts(url,postData))
        return fetch(url,{
            method: 'POST', 
            mode: 'cors',
            "Content-Type": 'text/plain',//"application/json",
        })
        .then(response => {
            if (response.ok) {
                response.json().then(
                    json => dispatch(resolvePosts(path, json))
                )
            } else {
                console.log("redux action fetch 拉取数据失败", response.status);
            }
        })
        .catch(error => dispatch(rejectPosts(path,error)))
    }
}















