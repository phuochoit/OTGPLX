import { combineReducers } from 'redux';
import Navigation from "./NavigationReducer";
import UserReducer from "./UserReducer";
import NoticeBoardReducer from "./NoticeBoardReducer";

export default rootReducer = combineReducers({
    nav: Navigation,
    user: UserReducer,
    noticeBoard: NoticeBoardReducer
});
