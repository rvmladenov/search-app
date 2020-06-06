import * as actionTypes from '../actions/actionTypes';

const initialState = {
    authorized: false,
    authData: {},
    error: {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                authorized: action.value
            };
        case actionTypes.AUTH_DATA:
            return {
                ...state,
                authData: action.value
            };
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.value
            };
        default:
            return state;
    }
};

export default reducer;