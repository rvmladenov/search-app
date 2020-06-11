import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/AuthActions';

import Home from './containers/Home/Home';
import Login from './containers/Auth/Login';

import './App.scss';

class App extends Component {
    state = {
        isAuthorized: false
    }

    componentDidMount() {
        console.log('componentDidMount');
        let authData = localStorage.getItem('authData');
        authData = authData ? JSON.parse(authData) : null;

        if (authData) {
            this.props.onLoginSuccess(authData);
            this.setState( {isAuthorized: true } );
        }
    }

    render() {
        return (
            <div id="app">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
                { this.state.isAuthorized ? <Redirect to="/home/search" /> : <Redirect to="/login" /> }
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

export default connect(null, mapDispatchToProps)(App);