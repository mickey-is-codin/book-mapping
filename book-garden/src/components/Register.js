import React from 'react';
import '../index.css';

import Background from './Background';

class Register extends React.Component {
  render() {
    return(
      <div>
        <RegisterPage/>
        <Background/>
      </div>
    );
  }
}

function RegisterPage() {
  return (
    <div className="wrapper d-flex flex-column">

      <header className="page-header p-2">
      </header>

      <main className="page-meat row justify-content-around d-flex">
        <div className="page-left col-1">
        </div>
        <div className="page-main-register col-6 align-self-center">
          <h1 className="banner-head justify-center">Sign Up</h1>
          <div className="form-group">
            <form>

              <label
                className="justify-left"
                htmlFor="userName">
                  Username
              </label>
              <input
                type="text"
                className="form-control register-field"
                placeholder="Enter Username"></input>
              <br/>

              <label
                className="justify-left"
                htmlFor="email">
                  Email
              </label>
              <input
                type="text"
                className="form-control register-field"
                placeholder="Enter Email"></input>
              <br/>

              <label
                className="justify-left"
                htmlFor="passwd">
                  Password
              </label>
              <input
                type="password"
                className="form-control register-field"
                placeholder="Enter Password"></input>
              <br/>

              <label
                className="justify-left"
                htmlFor="passwdConfirm">
                  Confirm Password
              </label>
              <input
                type="password"
                className="form-control register-field"
                placeholder="Confirm Password"></input>
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

export default Register;
