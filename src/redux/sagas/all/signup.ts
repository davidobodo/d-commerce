import firebase from "firebase/app";
import { firestore } from "../../../index";
import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/auth";

function* handleuserSignUp({ payload }) {
    const { email, password, firstName, lastName } = payload;
    try {
        const auth = firebase.auth();
        const user = yield call(
            [auth, auth.createUserWithEmailAndPassword],
            email,
            password
        );
        if (user) {
            firestore
                .collection("users")
                .doc(user.user.uid)
                .set({
                    firstName: firstName,
                    lastName: lastName
                });
            yield put(actions.requestSignUpSuccess(user));
        }
    } catch (err) {
        yield put(actions.requestSignUpError(err.message));
    }
}

function* watchSignUpUser() {
    yield takeEvery(action_types.REQUEST_SIGNUP_START as any, handleuserSignUp);
}

export default function*() {
    yield all([watchSignUpUser()]);
}
