import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as questionActions from '../../store/actions/QuestionsActions';
import * as templateActions from '../../store/actions/TemplateActions';
import * as ResultActions from '../../store/actions/ResultActions';

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
                    console.log(errorTemplates);
                });
            })
            .catch(errorQuestions => {
                console.log(errorQuestions);
            });
    }

    onQuestionsSelect = questions => {
        // TODO: 
        console.log(questions);
    }

    onTemplatesSelect = templates => {
        // TODO:
        console.log(templates);
    }

    render () {
        return (
            <div className="Home">
               <div className="Controls">
                    <Controls
                        questions={this.props.questions}
                        templates={this.props.templates}
                        onQuestionsSelect={this.onQuestionsSelect}
                        onTemplatesSelect={this.onTemplatesSelect}/>
                </div> 

                <div className="Results">
                    <Results templates={this.props.results} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        templates: state.templates.templates,
        questions: state.questions.questions,
        results: state.results.templates
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddQuestions: (questions) => dispatch(questionActions.addQuestions(questions)),
        onAddResults  : (templates) => dispatch(ResultActions.addResultTemplates(templates)),
        onAddTemplates: (templates) => dispatch(templateActions.addTemplates(templates))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);