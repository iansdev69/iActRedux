import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedTopicReducer from './SelectedTopicReducer';

export default combineReducers( {
    libraries: LibraryReducer,
    selectedTopicId: SelectedTopicReducer
});