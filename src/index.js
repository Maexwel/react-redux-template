import 'babel-polyfill'; 
import 'react-app-polyfill/ie11';
import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/index.js'
import { Provider } from 'react-redux'
import storeFactory from './store/index'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const store = storeFactory() // Initialization of the store

/** ENTRY POINT OF THE APP */

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();