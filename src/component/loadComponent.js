/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import Loading from './loading/loading.jsx';

//loadComponent 就是一个异步加载组件，当组件还未加载完就先显示 loading 组件， 加载完毕显示加载完毕的组件

const loadComponent = component =>
	class GetComponent extends Component    {
		constructor(props){
			super(props)
			this.state = { Component: null }
		}
		//在渲染前调用,在客户端也在服务端
		componentWillMount() {
			if(this.hasLoadedComponent()){
				return
			}
			component().then(module => module.default)
				.then((cop) => {
					this.setState({ Component : cop});
				})
				.catch((err) => {
					console.error('Cannot load component in <GetComponent />');
					throw err;
				})
		}

		hasLoadedComponent() {
			return this.state.Component !== null
		}

		render() {
			return this.state.Component ? <Component {...this.props} /> : <Loading/>
		}
	}

export default loadComponent