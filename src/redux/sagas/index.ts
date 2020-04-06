import { all } from "redux-saga/effects";
import signUpSaga from "./all/signup";

export default function* rootSaga() {
    yield all([signUpSaga()]);
}
