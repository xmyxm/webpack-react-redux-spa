import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import configureStore from './redux/configureStore.js';
import reducers from './redux/reducer/fetch-reducer.js';
import baseStyle from './style/base.less';

import Header from './component/header/header.jsx';
import Me from 'bundle-loader?lazy&name=app-[name]!./component/me/me.jsx';
import Home from 'bundle-loader?lazy&name=app-[name]!./component/home/home.jsx';
import Detail from 'bundle-loader?lazy&name=app-[name]!./component/detail/detail.jsx';
import Email from 'bundle-loader?lazy&name=app-[name]!./component/email/email.jsx';
import Bundle from './component/bundle.jsx';
import Loading from './component/loading/loading.jsx';

const history = createHistory();
const middleware = routerMiddleware(history);
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
        <Route path="/home" component = {createComponent(Home)} ></Route>
        <Route path="/detail/:id" render = {createComponent(Detail)} ></Route>
        <Route path="/me" render = {createComponent(Me)} ></Route>
        <Route path="/email" render = {createComponent(Email)} ></Route>
    </div>

    </Router>
  </Provider>,
  document.getElementById('app')
)


//<form action="http://qqweb.top/API/BlogApi/WorkList" method="post">
//    <input type="text" name="PageIndex" value="1" />
//    <input type="text" name="PageSize" value="10" />
//    <input type="submit" value="提交"/>
//</form>




