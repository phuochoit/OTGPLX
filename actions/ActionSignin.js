import { FETCH_SIGNIN, FETCH_SIGNIN_FAILED, FETCH_SIGNIN_SUCCEEDED, FETCH_LOGOUT, FETCH_LOGOUT_SUCCEEDED } from "./ActionTypes";

export function fetchSigninAction(action) {
    return {
        type: FETCH_SIGNIN,
        playload: action
    }
}
export function fetchLogoutAction() {
    return { type: FETCH_LOGOUT }
}


function fetchLogoutSuccessedAction() {
    return {
        type: FETCH_LOGOUT_SUCCEEDED,
    }
}

function fetchSigninSuccessedAction(result) {
    return {
        type: FETCH_SIGNIN_SUCCEEDED,
        result
    }
}
function fetchSigninFailedAction(error) {
    return {
        type: FETCH_SIGNIN_FAILED,
        error
    }
}