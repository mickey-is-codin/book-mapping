import React from 'react';
import '../index.css';

import Particles from 'react-particles-js';
import particleOpts from '../particles/particle-options.js';

function Background() {
  return (
    <div className="particles-container">
      <Particles className="particles" params={particleOpts}/>
    </div>
  );
}

export default Background;
