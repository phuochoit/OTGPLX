import { FETCH_SIGNIN, FETCH_SIGNIN_FAILED, FETCH_SIGNIN_SUCCEEDED, FETCH_LOGOUT, FETCH_LOGOUT_SUCCEEDED } from "../actions/ActionTypes";

import { put, takeLatest, call } from "redux-saga/effects";

function* fetchSigninSaga(action) {
    try {
        if (action.playload != null) {
            yield put({ type: FETCH_SIGNIN_SUCCEEDED, result: action.playload });
        }
    } catch (error) {
        yield put({ type: FETCH_SIGNIN_FAILED, error });
    }
}

function* fetchLogoutSaga() {
    yield put({ type: FETCH_LOGOUT_SUCCEEDED });
}

export function* watchFetchLogoutSaga() {
    yield takeLatest(FETCH_LOGOUT, fetchLogoutSaga);
}

export function* watchFetchSigninSaga() {
    yield takeLatest(FETCH_SIGNIN, fetchSigninSaga);
}