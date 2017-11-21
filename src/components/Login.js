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
    debugger;
  if (this.props.user) {
      return null;
    }
    //guard clause to hid the log in when you're logged in!
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

// const mapStateToProps = (state) => {
//   return state;
// }
// mapping the state from redux to the props

const mapActionsToProps = { login };
// this is an object that points at functions

export default connect(null, mapActionsToProps)(Login);
// this is a function that returns a  function and passes the component
// hooking it up via redux
