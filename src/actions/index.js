import { findMatchingUser } from '../users';

export function login(username, password) {
    return function(dispatch) {
      //dispatch is being passed through
      // this is going to dispatch other actions
        const user = findMatchingUser(username, password);
        // this is NOT a redux action, it's just a function
        // If it username/password are correct, a user object will be available
        if (user) {
            // TODO #6 trigger a LOGIN_SUCCESS action here
            console.log("it works");
            dispatch(loginSuccess(user));
        } else {
          console.log('fail');
        }
    };
}

function loginSuccess(user){
  return {
    type: 'LOGIN_SUCCESS',
    user: user
  }
}