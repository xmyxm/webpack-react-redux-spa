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


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import reducers from './redux/reducer/fetch-reducer.js';

import Index from './component/index/index.jsx';
import Home from './component/home/home.jsx';
import Detail from './component/detail/detail.jsx';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <div>
        <ul>
          <li><Link to="/">主页</Link></li>
          <li><Link to="/hot">热门</Link></li>
          <li><Link to="/zhuanlan">专栏</Link></li>
        </ul>
        <br/>
        <Route exact path="/" component = {() => <h1>默认页面</h1>} ></Route>
        <Route path="/hot" component={Home} ></Route>
        <Route path="/zhuanlan" render={() => <h1>About</h1>}></Route>
    </div>

    </Router>
  </Provider>,
  document.getElementById('app')
)


