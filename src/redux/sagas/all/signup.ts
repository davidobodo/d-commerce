import firebase from "firebase/app";
import { takeEvery, put, all, call } from "redux-saga/effects";
import * as action_types from "../../constants/action_types";
import * as actions from "../../actions/auth";

function* handleuserSignUp() {
    console.log("im here");
}

function* watchSignUpUser() {
    yield takeEvery(action_types.REQUEST_SIGNUP_START, handleuserSignUp);
}

export default function*() {
    yield all([watchSignUpUser()]);
}
