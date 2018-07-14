import {paramToStr} from 'utilspath/url-data.js';
import fetch from 'isomorphic-fetch';

export const SEARCH_REQUEST_POSTS = 'SEARCH_REQUEST_POSTS';//发送请求
export const SEARCH_REJECT_POSTS = 'SEARCH_REJECT_POSTS';//失败
export const SEARCH_RESOLVE_POSTS = 'SEARCH_RESOLVE_POSTS';//成功
export const SEARCH_SAVE_SCROLLTOP = 'SEARCH_SAVE_SCROLLTOP';//记录滚动位置

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

//记录滚动位置
export const saveScrollTop = (height) => {
	return {
		type: SEARCH_SAVE_SCROLLTOP,
		top : height
	}
}

// 页面初次渲染时获取数据
// 特别说明我们这边都是本地调试需求，直接调用远端的服务是跨域的，我在服务端只支持了简单跨域，所以简单跨域只能使用的 Content-Type 限定为如下3中，如果是
// 其它的值, 浏览器会发送 option 的预检请求，而我在服务端没有去支持预检请求，所以使用其他值会导致跨域失败。
// application/x-www-form-urlencoded
// multipart/form-data
// text/plain
export const fetchPosts = (path, postData) => {
	postData.PageSize = 10
	let url = path + '?' + paramToStr(postData)
	return (dispatch) => {
		dispatch(requestPosts(url,postData))
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