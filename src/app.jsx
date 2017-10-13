import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory'

//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { HashRouter as Router, Route, Switch, Link} from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import configureStore from './redux/configureStore.js';
import reducers from './redux/reducer/fetch-reducer.js';
import baseStyle from './style/base.less';

import Header from './component/header/header.jsx';
import Me from 'bundle-loader?lazy&name=app-[name]!./component/me/me.jsx';
import Home from 'bundle-loader?lazy&name=app-[name]!./component/home/home.jsx';
import List from 'bundle-loader?lazy&name=app-[name]!./component/list/list.jsx';
import Detail from 'bundle-loader?lazy&name=app-[name]!./component/detail/detail.jsx';
import Email from 'bundle-loader?lazy&name=app-[name]!./component/email/email.jsx';
import Search from 'bundle-loader?lazy&name=app-[name]!./component/search/search.jsx';
import Bundle from './component/bundle.jsx';
import Loading from './component/loading/loading.jsx';


/*const history = createHistory({
  basename: '/the/base'
  //basename: '/index.html'
})*/

const history = createHistory();

const store = configureStore();

const createComponent = (component) =>() => (
    <Bundle load={component}>
        {
            (Component) => Component?<Component />:<Loading/>
        }
    </Bundle>
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <div className = "blogbox">
            <Header/>
            <Route exact path="/" component = {createComponent(Home)} ></Route>
            <Route exact path="/index.html" component = {createComponent(Home)} ></Route>
            <Route exact path="/m/index.html" component = {createComponent(Home)} ></Route>
            <Route path="/home" component = {createComponent(Home)} ></Route>
            <Route path="/list" component = {createComponent(List)} ></Route>
            <Route path="/search" component = {createComponent(Search)}></Route>
            <Route path="/detail/:id" render = {createComponent(Detail)} ></Route>
            <Route path="/me" render = {createComponent(Me)} ></Route>
            <Route path="/email" render = {createComponent(Email)} ></Route>
        </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)





