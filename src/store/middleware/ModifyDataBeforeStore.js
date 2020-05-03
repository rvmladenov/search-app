import { ADD_QUESTIONS } from '../actions/QuestionsActions';
import { ADD_TEMPLATES } from '../actions/TemplateActions';

const modifyDataBeforeStore = store => {
return next => {
    return action => {
        // Modify data before sending it to the store
        switch (action.type) {
            case ADD_QUESTIONS:
            case ADD_TEMPLATES:
                const value = action.value.map(prop => {
                    return prop;
                })
                action.value = [...value];
            break;
        
            default:
            break;
        }

        const result = next(action);

        console.log('[Middleware] next state', store.getState()); // Gives you the updated in the store state
        return result;
    }
}
};

export default modifyDataBeforeStore;