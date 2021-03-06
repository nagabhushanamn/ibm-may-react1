import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import { Provider } from 'react-redux';
import { loadProducts } from './actions/products';


ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

// load all products
store.dispatch(loadProducts());

registerServiceWorker();
