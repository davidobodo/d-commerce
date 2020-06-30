import firebase from "firebase/app";
import { firestore } from "../../../index";
import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/auth";

function* handleuserSignUp({ payload }) {
    const EXPRESS_SIGNUP_ENDPOINT_LOCALHOST =
        "http://localhost:5000/api/users/signup";

    try {
        const res = yield fetch(EXPRESS_SIGNUP_ENDPOINT_LOCALHOST, {
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        console.log(res);

        if (res.ok) {
            const data = yield res.json();
            console.log(data);

            // yield put(actions.requestSignUpSuccess())
            // yield put(actions.requestUserLoginStart({ email, password }))
        } else {
            // const err = yield res.json()
            // yield put(actions.requestSignUpError(err));
        }
    } catch (err) {
        yield put(actions.requestSignUpError(err));
    }
}

function* watchSignUpUser() {
    yield takeEvery(action_types.REQUEST_SIGNUP_START as any, handleuserSignUp);
}

export default function* () {
    yield all([watchSignUpUser()]);
}
