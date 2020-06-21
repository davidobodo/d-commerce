import { all } from "redux-saga/effects";
import signUpSaga from "./all/signup";
import loginSaga from "./all/login";
import userSaga from "./all/user";

export default function* rootSaga() {
    yield all([signUpSaga(), loginSaga(), userSaga()]);
}
