import {paramToStr} from 'utilspath/url-data.js';
import fetch from 'isomorphic-fetch';

export const LIST_REQUEST_POSTS = 'LIST_REQUEST_POSTS';//发送请求
export const LIST_REJECT_POSTS = 'LIST_REJECT_POSTS';//失败
export const LIST_RESOLVE_POSTS = 'LIST_RESOLVE_POSTS';//成功
export const LIST_SAVE_SCROLLTOP = 'LIST_SAVE_SCROLLTOP';//记录滚动位置

//开始获取数据
export const requestPosts = (path,param) => {
  return {
    type: LIST_REQUEST_POSTS,
    path,
    param
  }
}

//获取数据成功
export const resolvePosts = (path, json) => {
  return {
        type: LIST_RESOLVE_POSTS,
        path ,
        json 
    }
}

//获取数据失败
export const rejectPosts = (path, error) => {
  return {
        type: LIST_REJECT_POSTS,
        path ,
        error
    }
}

//记录滚动位置
export const saveScrollTop = (height) => {
  return {
        type: LIST_SAVE_SCROLLTOP,
        top : height
    }
}

// 页面初次渲染时获取数据
export const fetchPosts = (path, postData) => {
    postData.PageSize = 10
    let url = path + '?' + paramToStr(postData)
    return (dispatch,getState) => {
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















