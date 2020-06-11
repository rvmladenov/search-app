import * as actionTypes from './actionTypes';

export const addTemplates = ( templates ) => {
    return {
        type: actionTypes.ADD_TEMPLATES,
        value: templates
    };
};

export const setSelectedTemplates = ( templates ) => {
    return {
        type: actionTypes.SET_SELECTED_TEMPLATES,
        value: templates
    };
};