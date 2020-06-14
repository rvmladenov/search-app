import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as actions from './store/actions/AuthActions';

import Home from './containers/Home/Home';
import Login from './containers/Auth/Login';

import './App.scss';

class App extends Component {

    componentDidMount() {
        console.log('componentDidMount');
        let authData = localStorage.getItem('authData');
        authData = authData ? JSON.parse(authData) : null;

        if (authData) {
            this.props.onLoginSuccess(authData);
        }

        // TODO: Need to figure out how to forbit the back button when not logged in
        // window.addEventListener('popstate', (event) => {
        //     if (!this.props.authorized) {
        //         this.props.history.replace({ pathname: '/login' })
        //     }
        // });

    }

    render() {
        return (
            <div id="app">
                <ToastContainer
                    position="top-center"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
                { this.props.authorized ? <Redirect to="/home/search" /> : <Redirect to="/login" /> }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginSuccess: (authData) => {
            dispatch(actions.logIn());
            dispatch(actions.authSuccess(authData));
        },
        authFail: (error) => {
            dispatch(actions.authFail(error));
        }
    }
};

const mapStateToProps = state => {
    return {
        authorized: state.auth.authorized
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));