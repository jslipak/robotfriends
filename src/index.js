import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './Hello';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './robots'
import 'tachyons';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello greeting="Hello , I'll be a ninja Warrior in React"/> , document.getElementById('root'));
ReactDOM.render(<div>
                    <Card  id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
                    <Card  id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
                    <Card  id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
                    <Card  id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
                </div>
                , document.getElementById('root'));
registerServiceWorker();

