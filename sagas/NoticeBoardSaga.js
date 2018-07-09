import { put, takeLatest, call, console } from "redux-saga/effects";
import firebase from "react-native-firebase";

import { FETCH_NOTICEBOARD, FETCH_NOTICEBOARD_SUCCEEDED, FETCH_NOTICEBOARD_FAILED, FETCH_MORE_NOTICEBOARD, FETCH_MORE_NOTICEBOARD_SUCCEEDED } from "../actions/ActionTypes";

const rootRef = firebase.database().ref('NoticeBoard');
const rootStorageRef = firebase.storage().ref('images/NoticeBoard');

function* fetchNoticeBoardSaga(params) {
    try {
        const { page, type } = params.params;
        
        // const posts = yield call(getAll, 'NoticeBoard');

        const ref = rootRef.orderByChild("loai_bien").equalTo("1").limitToFirst(10);

        const data = yield call([ref, ref.once], 'value');

        // console.log(posts);
        // let noticeboards = yield call(_getNoticeBoardsItems, page, type);
        yield put({
            type: FETCH_NOTICEBOARD_SUCCEEDED,
            result: {
                type,
                playload: data.val()
            }
        });
    } catch (error) {
        yield put({ type: FETCH_NOTICEBOARD_FAILED, error });
    }
}

export function* get(path, key) {
    const ref = firebase.database().ref(`${path}/${key}`);
    const data = yield call([ref, ref.once], 'value');
    return data.val();
}

export function* getAll(path) {
    const ref = firebase.database().ref(path).orderByChild("loai_bien").equalTo("1").limitToFirst(10);
    
    const data = yield call([ref, ref.once], 'value');
    return data.val();
}

function* fetchMoreNoticeBoardSaga(page) {
    try {
        console.log('====================================');
        console.log('page', page);
        console.log('====================================');
    } catch (error) {
        yield put({ type: FETCH_NOTICEBOARD_FAILED, error });
    }
}

function* _getNoticeBoardsItems(pages, type) {
    const items = [];
    const page = pages * 10;
    yield rootRef.orderByChild("loai_bien").equalTo(type).limitToFirst(page).on('value', (childSnapshot) => {
        items.push(childSnapshot.val());
    });
    
    return items;
}

function* _getNoticeBoardImages(image) {
    let url = null;
    const imagesRef = yield rootStorageRef.child(image + '.jpg')
    imagesRef.getDownloadURL().then(function (result) {
        url = result;
    });
    return url;
}


export function* watchFetchNoticeBoardSaga() {
    yield takeLatest(FETCH_NOTICEBOARD, fetchNoticeBoardSaga);
}

export function* watchFetchMoreNoticeBoardSaga() {
    yield takeLatest(FETCH_MORE_NOTICEBOARD, fetchMoreNoticeBoardSaga);
}
