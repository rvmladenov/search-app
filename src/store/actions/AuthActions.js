import * as actionTypes from './actionTypes';

export const logIn = () => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        value: true
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_DATA,
        value: authData
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        value: error
    }
};