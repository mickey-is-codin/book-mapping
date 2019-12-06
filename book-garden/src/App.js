import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './index.css';

import Particles from 'react-particles-js';
import particleOpts from './particles/particle-options.js';

function App() {
  return (
    <div>
      <Background/>
    </div>
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
