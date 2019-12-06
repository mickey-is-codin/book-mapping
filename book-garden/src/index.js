import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


import Home from './components/Home';
import Build from './components/Build';
import Login from './components/Login';
import Register from './components/Register';

const routing = (
    <Router>
        <Route path="/" component={Home} />
        <Route path="/build" component={Build} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

