import { put, takeLatest, call } from "redux-saga/effects";
import firebase from "react-native-firebase";
import { slice } from "lodash"

import { FETCH_NOTICEBOARD, FETCH_NOTICEBOARD_SUCCEEDED, FETCH_NOTICEBOARD_FAILED, FETCH_MORE_NOTICEBOARD, FETCH_MORE_NOTICEBOARD_SUCCEEDED } from "../actions/ActionTypes";
import { getImages } from "./ComomSaga";

const rootRef = firebase.database().ref('NoticeBoard');

function* fetchNoticeBoardSaga(params) {
    try {
        let data = [];
        const type = params.params;
        const ref = rootRef.orderByChild("loai_bien").equalTo(type).limitToFirst(10);
        const refdata = yield call([ref, ref.once], 'value');
        
        for (let index = 0; index < refdata.val().length; index++) {
            const element = refdata.val()[index];
            url = yield call(getImages, 'NoticeBoard', element.anh + '.jpg');
            console.log('url', url);
            data[index] = { ...refdata.val()[index], anh: url }
        }
        yield put({
            type: FETCH_NOTICEBOARD_SUCCEEDED,
            result: {
                type,
                playload: data
            }
        });
    } catch (error) {
        yield put({ type: FETCH_NOTICEBOARD_FAILED, error });
    }
}

function* fetchMoreNoticeBoardSaga(params) {
    try {
        let data = [];
        const { startKey, type } = params.params;
        const ref = rootRef.orderByChild("loai_bien").equalTo(type);
        const refdata = yield call([ref, ref.once], 'value');
        const slicedata = slice(refdata.val(), startKey, startKey + 10);
        for (let index = 0; index < slicedata.length; index++) {
            const element = slicedata[index];
            url = yield call(getImages, 'NoticeBoard', element.anh + '.jpg');
            data[index] = { ...slicedata[index], anh: url }
        }

        yield put({
            type: FETCH_MORE_NOTICEBOARD_SUCCEEDED,
            result: {
                type,
                playload: data,
                sumrecord: refdata.val().length
            }
        });
    } catch (error) {
        yield put({ type: FETCH_NOTICEBOARD_FAILED, error });
    }
}


export function* watchFetchNoticeBoardSaga() {
    yield takeLatest(FETCH_NOTICEBOARD, fetchNoticeBoardSaga);
}

export function* watchFetchMoreNoticeBoardSaga() {
    yield takeLatest(FETCH_MORE_NOTICEBOARD, fetchMoreNoticeBoardSaga);
}
