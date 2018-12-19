import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

// redux reducer
export default combineReducers({
    form: formReducer
});