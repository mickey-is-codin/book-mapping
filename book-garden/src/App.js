import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Build from './components/Build';
import Login from './components/Login';
import Register from './components/Register';
import './index.css';
import Particles from 'react-particles-js';
import particleOpts from './particles/particle-options.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/build">Build</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/build">
            <Build/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
        <Background/>
      </div>
    </Router>
  );
}

function Background() {
  return (
    <div className="particles-container">
      <Particles className="particles" params={particleOpts}/>
    </div>
  );
}

export default App;
