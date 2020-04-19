import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as questionActions from '../../store/actions/QuestionsActions';
import * as templateActions from '../../store/actions/TemplateActions';

import api from '../../core/api';
import Results from '../../components/Results/Results';
import Controls from '../../components/Controls/Controls';
import './Home.scss';

class Home extends Component {

    componentDidMount() {
        api.getQuestions()
            .then(questionsData => {
                this.props.onAddQuestions(questionsData.data);

                api.getTemplates()
                .then(templatesData => {
                    this.props.onAddTemplates(templatesData.data);
                })
                .catch(errorTemplates => {
                    // TODO:
                    console.log(errorTemplates);
                });
            })
            .catch(errorQuestions => {
                // TODO:
                console.log(errorQuestions);
            });
    }

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

const mapDispatchToProps = dispatch => {
    return {
        onAddQuestions: (questions) => dispatch(questionActions.addQuestions(questions)),
        onAddTemplates: (templates) => dispatch(templateActions.addTemplates(templates))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);