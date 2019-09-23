import { combineReducers } from 'redux';
import { exemple } from './exempleReducer';
import { view } from './viewReducer';

/** BASE OF ALL REDUCERS */
export default combineReducers({
    exemple,
    view
});