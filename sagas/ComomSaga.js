import firebase from "react-native-firebase";
import { call } from "redux-saga/effects";
const rootStorageRef = firebase.storage().ref('images');

export function* getImages(path, name) {
    const imagesRef = rootStorageRef.child(`${path}/${name}`);
    const url = yield call([imagesRef, imagesRef.getDownloadURL], 'result');
    return url;
}