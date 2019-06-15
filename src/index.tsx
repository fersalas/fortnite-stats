import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// Add API key to every axios call
axios.interceptors.request.use((config) => {
    const key = process.env.REACT_APP_API_KEY;
    return {...config, params: {...config.params, key}}
});



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
