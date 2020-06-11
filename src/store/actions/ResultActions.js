import * as actionTypes from './actionTypes';

export const addResultTemplates = ( templates ) => {
    return {
        type: actionTypes.ADD_RESULT_TEMPLATES,
        value: templates
    };
};