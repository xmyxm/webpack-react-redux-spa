import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducer';//拿到所有reducer来生成stare

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
export default (initialState) => {
    const middleware = [thunk, routerMiddleware(hashHistory)];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger());
        // middleware.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const finalCreateStore = applyMiddleware(...middleware)(createStore);
    const store = finalCreateStore(reducers, initialState);

    if (module.hot) {
        const nextReducer = require('./reducer');
        module.hot.accept('./reducer',
            () => { store.replaceReducer(nextReducer); });
    }

    return store;
};


