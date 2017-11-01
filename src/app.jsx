import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//域名根路径无法指向当前web站点index.html页面时启用 hash 路由
import createHistory from 'history/createHashHistory'
import { HashRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
//import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './redux/reducer';//拿到所有reducer来生成stare
import baseStyle from './style/base.less';

import Header from './component/header/header.jsx';
import loadComponent from './component/loadComponent.js';

const Me = loadComponent(() => import("./component/me/me.jsx"));
const Home = loadComponent(() => import("./component/home/home.jsx"));
const List = loadComponent(() => import("./component/list/list.jsx"));
const Detail = loadComponent(() => import("./component/detail/detail.jsx"));
const Email = loadComponent(() => import("./component/email/email.jsx"));
const Search = loadComponent(() => import("./component/search/search.jsx"));

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
const history = createHistory();
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
    //middleware.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
//初始化默认state数据
const initialState = {};
const finalCreateStore = applyMiddleware(...middleware)(createStore);
const store = finalCreateStore(reducers, initialState);

if (module.hot) {
    const nextReducer = require('./redux/reducer');
    module.hot.accept('./redux/reducer',() => { store.replaceReducer(nextReducer)} );
}

//启用排它性路由 Switch ，保证在 Switch 标签中只会命中一个组件
//启用 Redirect 做到，当匹配不到 Switch 中的路由时重定向到默认页面：/m/index.html ， 处理路由 404 问题
//因为react-router 是包容性路由，所以 exact 则要求路径与location.pathname必须完全匹配
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <div className = "blogbox">
            <Header/>
            <Switch>
                <Route path="/" exact component = {Home} ></Route>
                <Route path="/index.html" exact component = {Home} ></Route>
                <Route path="/m/index.html" exact component = {Home} ></Route>
                <Route path="/home" component = {Home} ></Route>
                <Route path="/list" component = {List} ></Route>
                <Route path="/search" component = {Search}></Route>
                <Route path="/detail/:id" component = {Detail} ></Route>
                <Route path="/me" component = {Me} ></Route>
                <Route path="/email" component = {Email} ></Route>
                <Redirect to="/m/index.html" />
            </Switch>
        </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)


