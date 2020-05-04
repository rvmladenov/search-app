export const ADD_TEMPLATES = 'ADD_TEMPLATE';
export const ADD_RESULT_TEMPLATES = 'ADD_RESULT_TEMPLATES';
export const SET_SELECTED_TEMPLATES = 'SET_SELECTED_TEMPLATES';
export const REMOVE_TEMPLATE = 'REMOVE_TEMPLATE';

export const addTemplates = ( templates ) => {
    return {
        type: ADD_TEMPLATES,
        value: templates
    };
};

export const setSelectedTemplates = ( templates ) => {
    return {
        type: SET_SELECTED_TEMPLATES,
        value: templates
    };
};