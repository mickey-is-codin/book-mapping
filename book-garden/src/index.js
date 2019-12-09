import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Home from './components/Home';
import Build from './components/Build';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/build" component={Build} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

