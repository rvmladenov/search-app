export const ADD_QUESTIONS = 'ADD_QUESTIONS';

export const addQuestions = ( questions ) => {
    return {
        type: ADD_QUESTIONS,
        value: questions
    };
};