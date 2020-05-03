import * as actionTypes from '../actions/TemplateActions';

const initialState = {
    templates: [] // [{ [id: any]: { name, [questions: string[]], createdAt: date } }]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TEMPLATES:
            return {
                ...state,
                templates: action.value
            };
        case actionTypes.REMOVE_TEMPLATE:
            // TODO:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducer;