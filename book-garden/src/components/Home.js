import React from 'react';
import '../index.css';

import {
    Link
} from 'react-router-dom';

import Background from './Background';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomePage/>
        <Background/>
      </div>
    );
  }
}

function HomePage() {
  return (
    <div className="wrapper d-flex flex-column">

      <header className="page-header p-2">
      </header>

      <main className="page-meat row justify-content-around d-flex">
        <div className="page-left col-1"></div>
        <WelcomeCard/>
        <div className="page-right col-1"></div>
      </main>

      <footer className="page-footer p-2">
      </footer>

    </div>
  );
}

function WelcomeCard() {
  return (
    <div className="page-main col-4 align-self-center">
      <div className="my-4">
        <h1 className="banner-head">Literary Garden</h1>
        <br/>
      </div>
      <div className="my-4">
        <a className="btn btn-outline-success" href="/build">Start Planting</a>
      </div>
      <div className="my-4">
        <small className="footnote">
          <Link to="/register">Sign Up</Link>  Already a Member? <Link to="/login">Sign In</Link>
        </small>
      </div>
    </div>
  );
}

export default Home;
