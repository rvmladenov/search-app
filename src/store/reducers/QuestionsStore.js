import * as actionTypes from '../actions/QuestionsActions';

const initialState = {
    questions: [], // [{ [id: any]: { name: string } }]
    selectedQuestions: [] // [{ [id: any]: { name: string } }]
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_QUESTIONS:
            return {
                ...state,
                questions: action.value
            };
        case actionTypes.SET_SELECTED_QUESTIONS:
            return {
                ...state,
                selectedQuestions: action.value
            };
        default:
            return state;
    }
};

export default reducer;