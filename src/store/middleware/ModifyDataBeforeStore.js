import * as actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify';

const modifyDataBeforeStore = store => {
return next => {
    return action => {
        // Modify data before sending it to the store
        switch (action.type) {
            case actionTypes.ADD_QUESTIONS:
            case actionTypes.ADD_TEMPLATES:
                const value = action.value.map(prop => {
                    return prop;
                })
                action.value = [...value];
            break;
        
            default:
            break;
        }

        const result = next(action);

        // TODO: console.log('[Middleware] next state', store.getState()); // Gives you the updated in the store state

        switch (action.type) {
            case actionTypes.AUTH_DATA:
                localStorage.setItem('authData', JSON.stringify(action.value));
            break;
            case actionTypes.AUTH_SUCCESS:
                localStorage.setItem('loggedIn', action.value);
            break;

            case actionTypes.AUTH_LOGOUT:
                localStorage.clear();
            break;

            case actionTypes.AUTH_FAIL:
                toast.error(action.value.message)
            break;
        
            default:
            break;
        }

        return result;
    }
}
};

export default modifyDataBeforeStore;