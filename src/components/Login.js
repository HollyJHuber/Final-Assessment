import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className = "Login">
        <form onSubmit = {this.handleSubmit}>
          <h2> SIGN IN </h2>
          <input  type = "text"
                  name = "username" />
          <br />
          <input  type = "password"
                  name = "password" />
          <br />
          <button type = "submit">
          Sign In </button>
        </form>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
}


export default Login;
