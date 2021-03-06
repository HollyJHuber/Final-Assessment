import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      password: ''
    }
  }
  render() {
    // if they are logged in don't show this
    if (this.props.userIsAlreadyLoggedIn) {
      return null;
    }
    //guard clause to hid the log in when you're logged in!
    return (
      <div className = "Login">
        <form onSubmit = {this.handleSubmit}>
          <h2> Sign In </h2>
          <input  type = "text"
                  name = "username" 
                  placeholder = "User Name"
                  value = {this.state.username}
                  onChange={this.handleName}/>
          <br />
          <input  type = "password"
                  name = "password" 
                  placeholder = "Password"
                  value={this.state.password}
                  onChange={this.handlePassword}/>
          <br />
          <button type = "submit">Sign In</button>
        </form>
        <span><a>Forgot your password?</a></span>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);

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

const mapActionsToProps = { login };
// this is an object that points at functions

const mapStateToProps = (state) => {
  return {
    userIsAlreadyLoggedIn: !!state.loggedInUser
  }
}
// mapping the state from redux to the props
// we need this to determine if the loggedinuser is no longer null

export default connect(mapStateToProps, mapActionsToProps)(Login);
// this is a function that returns a  function and passes the component
// hooking it up via redux
