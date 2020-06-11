import * as actionTypes from './actionTypes';

export const addQuestions = ( questions ) => {
    return {
        type: actionTypes.ADD_QUESTIONS,
        value: questions
    };
};

export const setSelectedQuestions = ( questions ) => {
    return {
        type: actionTypes.SET_SELECTED_QUESTIONS,
        value: questions
    };
};