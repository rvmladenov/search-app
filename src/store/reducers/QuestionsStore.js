import * as actionTypes from '../actions/QuestionsActions';

const initialState = {
    questions: [] // [{ [id: any]: { name: string } }]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_QUESTIONS:
            // TODO
            return {
                ...state,
                questions: action.value
            };
        default:
            return state;
    }
};

export default reducer;