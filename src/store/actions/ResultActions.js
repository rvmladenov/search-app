export const ADD_RESULT_TEMPLATES = 'ADD_RESULT_TEMPLATE';

export const addResultTemplates = ( templates ) => {
    return {
        type: ADD_RESULT_TEMPLATES,
        value: templates
    };
};