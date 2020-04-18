import * as actionTypes from '../actions/QuestionsActions';

const initialState = {
    questions: {} // { [id: any]: { name, [questions: string[]], createdAt: date } }
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_QUESTIONS:
            // TODO
            return {
                ...state
            };
        default:
            return state;
    }
};

export default reducer;