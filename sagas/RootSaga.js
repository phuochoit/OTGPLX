import { all, fork } from "redux-saga/effects";

// saga custom 
import { watchFetchSigninSaga, watchFetchLogoutSaga } from "./SigninSaga";
import { watchFetchMoreNoticeBoardSaga, watchFetchNoticeBoardSaga } from "./NoticeBoardSaga";

export default function* RootSaga() {
    yield all([
        fork(watchFetchSigninSaga),
        fork(watchFetchLogoutSaga),
        fork(watchFetchNoticeBoardSaga),
        fork(watchFetchMoreNoticeBoardSaga),
    ]);
}