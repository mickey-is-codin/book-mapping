import React from 'react';
import '../index.css';

import Particles from 'react-particles-js';
import particleOpts from '../particles/particle-options.js';

function Home() {
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

export default Home;
