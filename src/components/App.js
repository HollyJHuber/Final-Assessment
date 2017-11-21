import React, { Component } from 'react';

import Login from './Login';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login />
      <Profile />
      </div>
    );
  }
}

export default App;
