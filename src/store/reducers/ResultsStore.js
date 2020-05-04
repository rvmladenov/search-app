import * as actionTypes from '../actions/ResultActions';

const initialState = {
    templates: [] // [{ [id: any]: { name, [questions: string[]], createdAt: date } }]
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