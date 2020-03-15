import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PP from "./Props"

ReactDOM.render(<PP />, document.getElementById('root'));


serviceWorker.unregister();
