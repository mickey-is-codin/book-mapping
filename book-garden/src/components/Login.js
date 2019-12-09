import React from 'react';
import '../index.css';

import Background from './Background';

class Login extends React.Component {
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
        <div className="page-main-register col-6 align-self-center">
          <h1 className="banner-head justify-center">Login</h1>
          <div className="form-group">
            <form className="form-inline justify-content-around">

              <input
                type="text"
                className="form-control register-field px-1"
                placeholder="username/email">
              </input>

              <input
                type="password"
                className="form-control register-field  px-1"
                placeholder="password">
              </input>

            </form>
          </div>
        </div>
        <div className="page-right col-1">
        </div>
      </main>

      <footer className="page-footer p-2">
      </footer>

    </div>
  );
}

export default Login;
