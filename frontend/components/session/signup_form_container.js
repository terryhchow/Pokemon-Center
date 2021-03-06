import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)