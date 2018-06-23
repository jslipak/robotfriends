import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello greeting="Hello , I'll be a ninja Warrior in React"/> , document.getElementById('root'));
registerServiceWorker();

