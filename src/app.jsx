// import React from 'react';
// import {render} from 'react-dom';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import {syncHistoryWithStore, ConnectedRouter} from 'react-router-redux';

// import configureStore from './redux/configureStore.js';
// import App from './component/app/app.jsx';
// import Index from './component/index/index.jsx';
// import Home from './component/home/home.jsx';
// import Detail from './component/detail/detail.jsx';

// import createHistory from 'history/createBrowserHistory';

// const store = configureStore();
// const history = syncHistoryWithStore(createHistory(), store);


// render((
//     <Provider store={store}>
//         <Router history={history}>
//         <div>
//            <Switch>
//               <Route exact path="/" component={App}></Route>
//               <Route path="/home" component={Home} ></Route>
//            </Switch>
//         </div>
//         </Router>
//     </Provider>
// ), document.getElementById('app'));








// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
// import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
// import thunk from 'redux-thunk';
// import reducers from './redux/reducer/fetch-reducer.js';
// import baseStyle from './style/base.less';

// import Header from './component/header/header.jsx';
// import Me from 'bundle-loader?lazy&name=app-[name]!./component/me/me.jsx';
// import Home from 'bundle-loader?lazy&name=app-[name]!./component/home/home.jsx';
// import Detail from 'bundle-loader?lazy&name=app-[name]!./component/detail/detail.jsx';
// import Email from 'bundle-loader?lazy&name=app-[name]!./component/email/email.jsx';
// import Bundle from './component/bundle.jsx';
// import Loading from './component/loading/loading.jsx';

// const history = createHistory();
// const middleware = routerMiddleware(history);
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware,thunk)
// )

// /*const Loading = function () {
//     return <div>Loading...</div>
// }*/

// const createComponent = (component) =>() => (
//     <Bundle load={component}>
//         {
//             (Component) => Component?<Component />:<Loading/>
//         }
//     </Bundle>
// )

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//     <div className = "blogbox">
//         <Header/>
//         <Route exact path="/" component = {createComponent(Home)} ></Route>
//         <Route path="/home" component = {createComponent(Home)} ></Route>
//         <Route path="/detail/:id" render = {createComponent(Detail)} ></Route>
//         <Route path="/me" render = {createComponent(Me)} ></Route>
//         <Route path="/email" render = {createComponent(Email)} ></Route>
//     </div>

//     </Router>
//   </Provider>,
//   document.getElementById('app')
// )

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

/*const Loading = function () {
    return <div>Loading...</div>
}*/

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
