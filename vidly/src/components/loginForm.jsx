import React, { Component } from "react";

class LoginForm extends Component {
  validateLogin = () => {};

  render() {
    return (
      <div>
        <h1 className="headmargin">Login form</h1>

        <form>
          <div class="form-group">
            <label htmlfor="username" className="formmargin">
              User Name
            </label>
            <input
              id="username"
              type="text"
              className="form-control col-md-4"
            />
          </div>
          <div class="form-group">
            <label for="password" className="formmargin">
              Password
            </label>
            <input
              type="password"
              className="form-control col-md-4"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary formmargin"
            onClick={() => this.validateLogin}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
