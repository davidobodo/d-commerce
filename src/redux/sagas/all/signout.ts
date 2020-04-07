import firebase from "firebase/app";
import { takeEvery, put, all, call } from "redux-saga/effects";
import * as actionTypes from "../../constants/action_types";
import * as actions from "../../actions/auth";

function* handleUserSignOut() {
    try {
        const auth = firebase.auth();
        const user = yield call([auth, auth.signOut]);
        yield put(actions.signOutSuccess(user));
    } catch (err) {
        yield put(actions.signOutError(err.message));
    }
}

function* watchSignOutUser() {
    yield takeEvery(actionTypes.SIGNOUT_START, handleUserSignOut);
}

export default function*() {
    yield all([watchSignOutUser()]);
}
