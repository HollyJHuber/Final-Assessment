import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div className = "Login">
        <form onSubmit = {this.handleSubmit}>
          <h2> Sign In </h2>
          <input  type = "text"
                  name = "username" 
                  value = {this.state.username}
                  onChange={this.handleName}/>
          <br />
          <input  type = "password"
                  name = "password" 
                  value={this.state.password}
                  onChange={this.handlePassword}/>
          <br />
          <button type = "submit">Sign In</button>
        </form>
        <span>Forgot your password?</span>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // submit a redux action
    
    this.setState({
      username: '',
      password: ''
      });
  }
  handleName = (event) => {
    this.setState({
        username: event.target.value
    });
  }
  handlePassword = (event) => {
    this.setState({
        password: event.target.value
    });
  }
}

export default Login;
