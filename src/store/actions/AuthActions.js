import * as actionTypes from './actionTypes';

export const logIn = () => {
    return {
        type: actionTypes.AUTH_SUCCESS
    };
};

export const logOut = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
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