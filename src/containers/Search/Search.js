import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as questionActions from '../../store/actions/QuestionsActions';
import * as templateActions from '../../store/actions/TemplateActions';
import * as ResultActions from '../../store/actions/ResultActions';

import api from '../../core/api';
import Results from '../../components/Results/Results';
import Controls from '../../components/Controls/Controls';
import './Search.scss';

class Search extends Component {
    _isMounted = false;

    state = {
        filteredTemplates: [],
        filteredQuestions: []
    };

    componentDidMount() {
        this._isMounted = true; 
        api.getQuestions()
            .then(questionsData => {

                if (this._isMounted) {
                    this.props.onAddQuestions(questionsData.data);
                    this.setState({ filteredQuestions: questionsData.data });
                    
                    api.getTemplates()
                        .then(templatesData => {
                            this.props.onAddTemplates(templatesData.data);
                            this.setState({ filteredTemplates: templatesData.data });
                        })
                        .catch(errorTemplates => {
                            console.log(errorTemplates);
                        });
                    }
            })
            .catch(errorQuestions => {
                console.log(errorQuestions);
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

    // TODO: move that to a helper service. It is been used in TemplateSearch.js and ExpansionPanel.js to determine if the template has all selected questions
    checkExistance = (arr, target) => {
        return target.every(v => arr.includes(v))
    };

    onQuestionsSelect = questions => {
        const selectedQuestionIdsArr = questions.map(question => question.id );
        const filteredTemplates = this.props.templates.filter(template => {
            return this.checkExistance(template.questions, selectedQuestionIdsArr);
        });

        this.setState({ filteredTemplates: filteredTemplates });

        // this.props.onSetSelectedQuestions(questions);
    };

    onTemplatesSelect = templates => {
        const resultTemplates = templates.map(template => {

            const questions = template.questions.map(questionIndex => {
                const foundedQuestion = this.props.questions.find(question => {
                    return question.id === questionIndex;
                });

                return foundedQuestion ? foundedQuestion.name : '<undefined-question>';
            })
            
            return {...template, questions: questions.join(', ')};
        });

        this.props.onAddResults(resultTemplates);
    };

    updateTemplatesState = () => {
        // TODO:
    };

    crossFilterData = () => {
        // TODO:
    };

    render () {
        return (
            <div className="Search">
               <div className="Controls">
                    <Controls
                        questions={ { questions: this.state.filteredQuestions, selectedQuestions: this.props.selectedQuestions } }
                        templates={ { templates: this.state.filteredTemplates, selectedTemplates: this.props.selectedTemplates } }
                        onQuestionsSelect={this.onQuestionsSelect}
                        onTemplatesSelect={this.onTemplatesSelect}/>
                </div> 

                <div className="Results">
                    <Results resultTemplates={this.props.results} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);