import * as actionTypes from '../actions/actionTypes';

const initialState = {
    templates: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_RESULT_TEMPLATES:
            return {
                ...state,
                templates: action.value
            };
        default:
            return state;
    }
};

export default reducer;