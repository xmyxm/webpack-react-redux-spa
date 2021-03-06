import {paramToStr} from 'utilspath/url-data.js';
import fetch from 'isomorphic-fetch';

export const DETAIL_REQUEST_POSTS = 'DETAIL_REQUEST_POSTS';//发送请求
export const DETAIL_REJECT_POSTS = 'DETAIL_REJECT_POSTS';//失败
export const DETAIL_RESOLVE_POSTS = 'DETAIL_RESOLVE_POSTS';//成功

//开始获取数据
export const requestPosts = (path,param) => {
	return {
		type: DETAIL_REQUEST_POSTS,
		path,
		param
	}
}

//获取数据成功
export const resolvePosts = (path, json) => {
	return {
		type: DETAIL_RESOLVE_POSTS,
		path ,
		json
	}
}

//获取数据失败
export const rejectPosts = (path, error) => {
	return {
		type: DETAIL_REJECT_POSTS,
		path ,
		error
	}
}

// 页面初次渲染时获取数据
export const fetchPosts = (path, postData) => {
	let url = path + '?' + paramToStr(postData);

	return dispatch => {
		dispatch(requestPosts(url,postData));
		return fetch(url,{
			method: 'POST',
			mode: 'cors',
			'Content-Type': 'text/plain'//"application/json",
		})
			.then(response => {
				if (response.ok) {
					response.json().then(
						json => dispatch(resolvePosts(path, json))
					)
				} else {
					console.log('redux action fetch 拉取数据失败', response.status);
				}
			})
			.catch(error => dispatch(rejectPosts(path,error)))
	}
}