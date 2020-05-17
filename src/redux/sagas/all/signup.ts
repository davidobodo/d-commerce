import firebase from "firebase/app";
import { firestore } from "../../../index";
import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/auth";

function* handleuserSignUp({ payload }) {
    const { email, password, firstName, lastName } = payload;
    const SIGNUP_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_apiKey}`;
    const bodyPayload = {
        email,
        password,
        returnSecureToken: true
    }
    try {
        const res = yield fetch(SIGNUP_ENDPOINT, {
            body: JSON.stringify(bodyPayload),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        })


        if (res.ok) {
            const data = yield res.json();
            firestore
                .collection("users")
                .doc(data.localId)
                .set({
                    firstName: firstName,
                    lastName: lastName
                });
            yield put(actions.requestSignUpSuccess())
            yield put(actions.requestUserLoginStart({ email, password }))
        } else {
            const err = yield res.json()
            yield put(actions.requestSignUpError(err));
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
