import React, { Component } from 'react';

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
  constructor(props){
    super(props);
    this.state={
      user: USER
    }
  }

  render() {
    return (
      <div className="Profile">
        <h2>Profile</h2>
        <h3>Welcome, {this.state.user.name}</h3>
        <div className="flexContainer">
          <img className="ProfileImage" src = {this.state.user.img}/>
          <ul>
            <li>Email: {this.state.user.email}</li>
            <li>Phone Number: {this.state.user.phone}</li>
            <li>Location: {this.state.user.location}</li>
          </ul>
        </div>
        <h4>Edit Profile</h4>
      </div>
    );
  }
}

export default Profile;
