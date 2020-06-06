import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/UI/Layout/Layout'
import Home from './containers/Home/Home';

import './App.scss';

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/home/search" component={Home} />
            </Switch>
        </Layout>
    );
  }
}

export default App;