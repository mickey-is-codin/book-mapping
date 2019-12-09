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

      <header className="page-header p-2">
      </header>

      <main className="page-meat row justify-content-around d-flex">
        <div className="page-left col-1">
        </div>
        <div className="page-main col-6 align-self-center">
          <h1 className="">Build</h1>
          <p className="lead">Create a new graph or garden</p>
        </div>
        <div className="page-right col-1">
        </div>
      </main>

      <footer className="page-footer p-2">
      </footer>

    </div>
  );
}

export default Build;
