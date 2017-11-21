const INITIAL_STATE = {
    loggedInUser: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            logInUser(state, action.user);
        default:
            return state;
    }
}

function logInUser(state, user) {
    return Object.assign({}, state, {
        loggedInUser: user
    })
}