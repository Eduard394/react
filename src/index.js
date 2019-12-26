import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Example />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('Lega'));

serviceWorker.unregister();
