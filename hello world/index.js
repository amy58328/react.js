import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Init extends React.Component {
	render()
	{
		return <h1>Hello World!</h1>
	}
}
ReactDOM.render(<Init />, document.getElementById('root'));


