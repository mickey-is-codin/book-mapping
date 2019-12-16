import React from 'react';
import '../index.css';

import Background from './Background';

class Build extends React.Component {
  render() {
    return(
      <div>
        <Banner/>
        <Background/>
      </div>
    );
  }
}

function Banner() {
  return (
    <div className="wrapper d-flex flex-column">
    </div>
  );
}

export default Build;
