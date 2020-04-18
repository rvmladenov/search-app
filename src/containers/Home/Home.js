import React, { Component } from 'react';
import { connect } from 'react-redux';

import Results from '../../components/Results/Results';
import Controls from '../../components/Controls/Controls';
import './Home.scss';

class Home extends Component {

    onSelection = selection => {
        console.log(selection);
    }

    render () {
        return (
            <div className="Home">
               <div className="Controls">
                    <Controls
                        questions={this.props.questions}
                        templates={this.props.templates}
                        onSelection={this.onSelection}/>
                </div> 

                <div className="Results">
                    <Results />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        templates: state.templates.templates,
        questions: state.questions.questions
    }
};

export default connect(mapStateToProps)(Home);