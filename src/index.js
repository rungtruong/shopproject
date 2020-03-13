import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './assets/AdminLTE/plugins/fontawesome-free/css/all.min.css';
// import './assets/AdminLTE/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
// import './assets/AdminLTE/css/adminlte.min.css';

// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './assets/AdminLTE/js/adminlte.min'

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
