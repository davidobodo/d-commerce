import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/user";

//worker saga: fired on each REQUEST_LOGIN_START action
function* handleUserRequest({ payload }) {
    console.log(payload);
    const USER_DATA_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_apiKey}`;

    const bodyPayload = {
        idToken: payload,
    };
    try {
        const res = yield fetch(USER_DATA_ENDPOINT, {
            body: JSON.stringify(bodyPayload),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        if (res.ok) {
            const data = yield res.json();
            console.log(data);
            // yield put(actions.requestUserLoginSuccess(data));
        } else {
            // const err = yield res.json();
            // yield put(actions.requestUserLoginError(err));
        }
    } catch (err) {
        // yield put(actions.requestUserLoginError(err));
    }
}

//watcher saga: watches for which action is fired
function* watchUserRequest() {
    yield takeEvery(action_types.GET_USER_DATA_START as any, handleUserRequest);
}

export default function* () {
    yield all([watchUserRequest()]);
}
