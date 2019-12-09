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
            <form className="form-inline px-4 justify-content-around">

              <label
                className="sr-only"
                htmlFor="userName">
                  Username/Email
              </label>
              <input
                type="text"
                className="form-control register-field"
                placeholder="Enter Username/Email"></input>

              <label
                className="sr-only"
                htmlFor="passwd">
                  Password
              </label>
              <input
                type="password"
                className="form-control register-field"
                placeholder="Enter Password"></input>
              <br/>

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
