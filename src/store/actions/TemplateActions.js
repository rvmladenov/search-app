export const ADD_TEMPLATES = 'ADD_TEMPLATE';
export const REMOVE_TEMPLATE = 'REMOVE_TEMPLATE';

export const addTemplates = ( templates ) => {
    return {
        type: ADD_TEMPLATES,
        value: templates
    };
};