import loadComponent from 'componentpath/loadComponent.js';

let callback, initListData;
const loadMe = () => {
	let copent = null
	return function() {
		if (!copent) {
			copent = import(/* webpackChunkName: "app-me" */'componentpath/me/me.jsx')()
		}
		return copent
	}
}
const loadHome = () => import(/* webpackChunkName: "app-home" */'componentpath/home/home.jsx')
//const loadList = () => import(/* webpackChunkName: "app-list" */'componentpath/list/list.jsx')
const loadList = (function() {
	let copent = null
	return function() {
		if (!copent) {
			copent = import(/* webpackChunkName: "app-list" */'componentpath/list/list.jsx')
		}
		return copent
	}
})()

const loadDetail = () => import(/* webpackChunkName: "app-detail" */'componentpath/detail/detail.jsx')
const loadEmail = () => import(/* webpackChunkName: "app-email" */'componentpath/email/email.jsx')
const loadSearch = () => import(/* webpackChunkName: "app-search" */'componentpath/search/search.jsx')

const Me = loadComponent(loadMe, (status) => {
	callback('Me', status)
});
const Home = loadComponent(loadHome, (status) => {
	callback('Home', status)
});
const List = loadComponent(loadList, (status) => {
	callback('List', status)
});
const Detail = loadComponent(loadDetail, (status) => {
	callback('Detail', status)
});
const Email = loadComponent(loadEmail, (status) => {
	callback('Email', status)
});
const Search = loadComponent(loadSearch, (status) => {
	callback('Search', status)
});

const requestFile = (proms, name) => () => {
	if (initListData[name].status == 2) {
		return
	}
	callback(name, 1)
	proms().then(() => {
		callback(name, 2)
	}).catch((e) => {
		console.warn(e);
		callback(name, 0);
	})
}

// status 1:加载中，2:加载完成
initListData = {
	Me: {
		init: requestFile(loadMe, 'Me'),
		component: Me,
		status: 0
	},
	Home: {
		init: requestFile(loadHome, 'Home'),
		component: Home,
		status: 0
	},
	List: {
		init: requestFile(loadList, 'List'),
		component: List,
		status: 0
	},
	Detail: {
		init: requestFile(loadDetail, 'Detail'),
		component: Detail,
		status: 0
	},
	Email: {
		init: requestFile(loadEmail, 'Email'),
		component: Email,
		status: 0
	},
	Search: {
		init: requestFile(loadSearch, 'Search'),
		component: Search,
		status: 0
	}
}
callback = (name, status) => {
	if (initListData[name]) {
		initListData[name].status = status
		switch(status) {
		case 1 : console.log(`组件${name}加载中`);break;
		case 2 : console.log(`组件${name}加载完成`);break;
		default : console.log(`组件${name}加载状态异常：${status}`)
		}
	}
}

export default initListData


