import { all } from "redux-saga/effects";
import signUpSaga from "./all/signup";
import loginSaga from "./all/login";
import signoutSaga from "./all/signout";

export default function* rootSaga() {
    yield all([signUpSaga(), loginSaga(), signoutSaga()]);
}
