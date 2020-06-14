import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../../components/UI/Layout/Layout'
import Search from '../Search/Search';

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/home/search" component={Search} />
                </Switch>
            </Layout>
        );
    }
}

export default App;