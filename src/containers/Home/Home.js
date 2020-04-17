import React, { Component } from 'react';

import Results from '../../components/Results/Results';
import Controls from '../../components/Controls/Controls';
import './Home.scss';

class Home extends Component {

    render () {
        return (
            <div className="Home">
               <div className="Controls">
                    <Controls />
                </div> 

                <div className="Results">
                    <Results />
                </div>
            </div>
        );
    }
}

export default Home;