import { NavigationActions } from 'react-navigation';

import { AUTHLOADING, APP, USERSIGNIN } from "../values/ScreenName";
import { FETCH_SIGNIN_SUCCEEDED, FETCH_LOGOUT_SUCCEEDED } from "../actions/ActionTypes";
import { RootNavigator } from '../navigators/RootNavigation';

const AuthAction = RootNavigator.router.getActionForPathAndParams(AUTHLOADING);
const initialNavState = RootNavigator.router.getStateForAction(
    AuthAction,
);

export default (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case FETCH_SIGNIN_SUCCEEDED:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: APP }),
                state
            );
            break;
        case FETCH_LOGOUT_SUCCEEDED:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: USERSIGNIN }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
};