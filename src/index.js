import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*Redux Import*/
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import shopReucer from './store/reducers/shop';
import {watchShop} from './store/sagas';
/*Redux Import*/


window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
axios.defaults.baseURL = 'http://wx.bjlxhqx.com/api/';
axios.defaults.headers = {'Content-type': 'application/x-www-form-urlencoded'};
// axios.defaults.transformRequest = [function (data) {
//   let body = '';
//   for (const k in data) {
//     if (k) {
//       body += k + '=' + data[k] + '&';
//     }
//   }
//
//   body = body.replace(/&$/g, '');
//   return body;
// }];

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer = combineReducers({
  shop: shopReucer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(watchShop);

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
