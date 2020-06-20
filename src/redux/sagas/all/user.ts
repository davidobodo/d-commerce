import { firestore } from "../../../index";

import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/user";
import { requestUserLoginSuccess } from "../../actions/auth";

function* handleGetFirebaseUserProfile({ payload }) {
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

function* handleUpdateEmail({ payload }) {
    console.log("firing saga action");
    const { idToken, newEmail } = payload;
    const bodyPayload = {
        idToken,
        email: newEmail,
        returnSecureToken: true,
    };
    const UPDATE_EMAIL_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_apiKey}`;

    try {
        const res = yield fetch(UPDATE_EMAIL_ENDPOINT, {
            body: JSON.stringify(bodyPayload),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        console.log(res);
        if (res.ok) {
            const data = yield res.json();
            console.log(data);
            yield put(actions.updateEmailSuccess("Email updated successfully"));
        } else {
            const err = yield res.json();
            yield put(actions.updateEmailFail(err));
        }
    } catch (err) {
        yield put(actions.updateEmailFail(err));
    }
}

function* handleGetUserDocument({ payload }) {
    const docRef = firestore.collection("users").doc(`${payload}`);

    try {
        const doc = yield docRef.get();

        if (doc.exists) {
            yield put(actions.getUserDocumentSuccess(doc.data()));
        } else {
            throw "No such document";
        }
    } catch (err) {
        yield put(actions.getUserDocumentFail(err));
    }
}

function* watchUserRequest() {
    yield takeEvery(
        action_types.GET_FIREBASE_USER_DATA_START as any,
        handleGetFirebaseUserProfile
    );
    yield takeEvery(
        action_types.GET_USER_DOCUMENT_START as any,
        handleGetUserDocument
    );
    yield takeEvery(action_types.UPDATE_EMAIL_START as any, handleUpdateEmail);
}

export default function* () {
    yield all([watchUserRequest()]);
}
