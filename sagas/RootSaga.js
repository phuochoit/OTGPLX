import {all, fork  } from "redux-saga/effects";

// saga custom 
import { watchFetchSigninSaga, watchFetchLogoutSaga } from "./SigninSaga";

export default function* RootSaga() {
    yield all([
        fork(watchFetchSigninSaga),
        fork(watchFetchLogoutSaga),
    ]);
}