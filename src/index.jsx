import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './redux/configureStore.js';
import App from './component/app/app.jsx';
import Index from './component/index/index.jsx';
import Home from './component/home/home.jsx';
import Detail from './component/detail/detail.jsx';

import createHistory from 'history/createBrowserHistory';

const store = configureStore();
const history = syncHistoryWithStore(createHistory(), store);


render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));





               
// <Route path="/msource/:msource/:page" component={MSourcePageModuleList}/>
// <Route path="/page" component={PageList}/>
// <Route path="/page/:page" component={PageModuleList}/>


    //             <IndexRoute component={Index}/>
    //             <Route path="/home" component={Home}/>
				// <Route path="/detail/:id" component={Detail}/>
				// 