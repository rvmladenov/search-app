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
    state = {
        filteredTemplates: [],
        filteredQuestions: []
    };

    componentDidMount() {
        api.getQuestions()
            .then(questionsData => {
                this.props.onAddQuestions(questionsData.data);
                this.setState({ filteredQuestions: questionsData.data });
                // this.props.filteredQuestions = questionsData.data;
                
                api.getTemplates()
                .then(templatesData => {
                    this.props.onAddTemplates(templatesData.data);
                    this.setState({ filteredTemplates: templatesData.data });
                    // this.props.filteredTemplates = templatesData.data;
                })
                .catch(errorTemplates => {
                    console.log(errorTemplates);
                });
            })
            .catch(errorQuestions => {
                console.log(errorQuestions);
            });
    }

    // TODO: move that to a helper service. It is been used in the TemplateSearch.js as well
    checkExistance = (arr, target) => {
        return target.every(v => arr.includes(v))
    };

    onQuestionsSelect = questions => {
        const selectedQuestionIdsArr = questions.map(question => question.id );
        const filteredTemplates = this.props.templates.filter(template => {
            return this.checkExistance(template.questions, selectedQuestionIdsArr);
        });

        this.setState({ filteredTemplates: filteredTemplates });

        this.props.onSetSelectedQuestions(questions);
    }

    onTemplatesSelect = templates => {
        // TODO:
        console.log(templates);

        // TODO: взимам всичките question ids от темплейта и ги слагам
    }

    crossFilterData = () => {
        // TODO:
    };

    render () {
        return (
            <div className="Home">
               <div className="Controls">
                    <Controls
                        questions={ { questions: this.state.filteredQuestions, selectedQuestions: this.props.selectedQuestions } }
                        templates={ { templates: this.state.filteredTemplates, selectedTemplates: this.props.selectedTemplates } }
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
        selectedTemplates: state.templates.selectedTemplates,
        selectedQuestions: state.questions.selectedQuestions,
        results: state.results.templates
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddQuestions: (questions) => {
            dispatch(questionActions.addQuestions(questions))
        },
        onAddResults  : (templates) => dispatch(ResultActions.addResultTemplates(templates)),
        onAddTemplates: (templates) => dispatch(templateActions.addTemplates(templates)),
        onSetSelectedTemplates: (templates) => dispatch(templateActions.setSelectedTemplates(templates)),
        onSetSelectedQuestions: (templates) => dispatch(questionActions.setSelectedQuestions(templates))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);