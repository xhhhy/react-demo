import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP from './route/index';
import * as serviceWorker from './serviceWorker';

//使用react-redux


ReactDOM.render(<APP />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
