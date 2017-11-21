const INITIAL_STATE = {
    loggedInUser: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return logInUser(state, action.user);
        default:
            return state;
    }
}

function logInUser(state, user) {
    return Object.assign({}, state, {
        loggedInUser: user
    })
}
// Object.assign is a method on the class Object
//it starts with a blank object {}, applies state, and then applies the 