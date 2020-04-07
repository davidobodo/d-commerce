import firebase from "firebase/app";
import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/auth";

//worker saga: fired on each REQUEST_LOGIN_START action
function* handleUserLogin({ payload }) {
    const { email, password } = payload;
    try {
        const auth = firebase.auth();
        const user = yield call(
            [auth, auth.signInWithEmailAndPassword],
            email,
            password
        );
        yield put(actions.requestUserLoginSuccess(user));
    } catch (err) {
        yield put(actions.requestUserLoginError(err.message));
    }
}

//watcher saga: watches for which action is fired
function* watchLoginUser() {
    yield takeEvery(action_types.REQUEST_LOGIN_START as any, handleUserLogin);
}

export default function*() {
    yield all([watchLoginUser()]);
}
