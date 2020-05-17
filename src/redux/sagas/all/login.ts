import firebase from "firebase/app";
import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/auth";

//worker saga: fired on each REQUEST_LOGIN_START action
function* handleUserLogin({ payload }) {
    const { email, password } = payload;
    console.log(payload, 'saga')
    const SIGNIN_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_apiKey}`

    const bodyPayload = {
        email,
        password,
        returnSecureToken: true
    }
    try {

        const res = yield fetch(SIGNIN_ENDPOINT, {
            body: JSON.stringify(bodyPayload),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        })

        if (res.ok) {
            const data = yield res.json();
            yield put(actions.requestUserLoginSuccess(data));
        } else {
            const err = yield res.json();
            yield put(actions.requestUserLoginError(err));
        }
    } catch (err) {
        yield put(actions.requestUserLoginError(err));
    }
}

//watcher saga: watches for which action is fired
function* watchLoginUser() {
    yield takeEvery(action_types.REQUEST_LOGIN_START as any, handleUserLogin);
}

export default function* () {
    yield all([watchLoginUser()]);
}
