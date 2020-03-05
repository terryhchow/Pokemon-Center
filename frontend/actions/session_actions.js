import * as APIUtil from '../util/session_api_util';
// login(user)(thunk action creator)
// logout()(thunk action creator)
// signup(user)(thunk action creator)

// receiveCurrentUser(currentUser)(regular action creator)
// logoutCurrentUser()(regular action creator)
// receiveErrors(errors)(regular action creator)

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON)))
);
export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON)))
);
export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);