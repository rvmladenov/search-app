export const ADD_QUESTIONS = 'ADD_QUESTIONS';
export const SET_SELECTED_QUESTIONS = 'ADD_SELECTED_QUESTIONS';

export const addQuestions = ( questions ) => {
    return {
        type: ADD_QUESTIONS,
        value: questions
    };
};

export const setSelectedQuestions = ( questions ) => {
    return {
        type: SET_SELECTED_QUESTIONS,
        value: questions
    };
};