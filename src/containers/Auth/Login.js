import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/AuthActions';
import LoginView from '../../components/SignIn/SignIn';

class Login extends Component {

    loginHandler = (email, password) => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        axios
            .post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA-dDZ7NOOfB5THgPW8PTrrPbdYX9RUk88', authData)
            .then(response => {
                this.props.onLoginSuccess(response.data);
                this.props.history.push('/home/search');
            })
            .catch(error => {
                this.props.authFail(error);
            })
    }

      render () {
            return (
                <LoginView onLogin={ (email, password) => this.loginHandler(email, password) } />
            );
      }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginSuccess: (authData) => {
            dispatch(actions.authSuccess(authData));
            dispatch(actions.logIn());
        },
        authFail: (error) => {
            dispatch(actions.authFail(error));
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);