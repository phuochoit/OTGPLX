import { combineReducers } from 'redux';
import Navigation from "./NavigationReducer";
import UserReducer from "./UserReducer";

export default rootReducer = combineReducers({
    nav: Navigation,
    user: UserReducer
});
