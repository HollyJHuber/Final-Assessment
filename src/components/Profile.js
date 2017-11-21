import React, { Component } from 'react';
import { connect } from 'react-redux';

// TODO: Get user from Redux
const USER =
  {
    username: 'indianajones',
    password: 'coolPassword',
    name: 'Indiana Jones',
    email: 'indianajones@gmail.com',
    img: '/images/indianajones.jpg',
    location: 'Portland, OR',
    phone: '333-333-5555'
  }

class Profile extends Component {
  // this was temp code for 
  // constructor(props){
  //   super(props);
  //   this.state={
  //     user: USER
  //   }
  // }

  render() {
    if (!this.props.user) {
      return null;
    }
    // this is because the loggedInUser property is set to null in the initial state
    // the guard clause hides the profile when you have to login first

    return (
      <div className="Profile">
        <h2>Profile</h2>
        <h3>Welcome, {this.props.user.name}</h3>
        <div className="flexContainer">
          <img className="ProfileImage" src = {this.props.user.img}/>
          <ul>
            <li>Email: {this.props.user.email}</li>
            <li>Phone Number: {this.props.user.phone}</li>
            <li>Location: {this.props.user.location}</li>
          </ul>
        </div>
        <h4><a>Edit Profile</a></h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loggedInUser
  }
}

export default connect(mapStateToProps, null)(Profile);
