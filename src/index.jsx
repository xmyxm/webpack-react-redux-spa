import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './redux/configureStore.js';
// import App from 'component/app/app.jsx';
// import Index from 'component/index/index.jsx';
// import Home from 'component/home/home.jsx';
// import Detail from 'component/detail/detail.jsx';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MSourceList}/>
                <Route path="/msource" component={MSourceList}/>
                <Route path="/msource/:msource" component={MSourcePageList}/>
                <Route path="/msource/:msource/:page" component={MSourcePageModuleList}/>
                <Route path="/page" component={PageList}/>
                <Route path="/page/:page" component={PageModuleList}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));





// import {render} from 'react-dom';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router';
// import {Provider} from 'react-redux';
// import {syncHistoryWithStore} from 'react-router-redux';

// import configureStore from './redux/configureStore.js';
// import App from 'component/app/app.jsx';
// import Index from 'component/index/index.jsx';
// import Home from 'component/home/home.jsx';
// import Detail from 'component/detail/detail.jsx';

// const store = configureStore();
// const history = syncHistoryWithStore(hashHistory, store);

// render(
//     <Provider store={store}>
//         <Router history={history}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Home}/>
//                 <Route path="/index" component={Index}/>
//                 <Route path="/detail/:id" component={Detail}/>
//             </Route>
//         </Router>
//     </Provider>
// , document.getElementById('app'));
