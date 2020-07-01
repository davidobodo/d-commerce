import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
    REQUEST_LOGIN_START,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAIL,
    SIGNOUT,
    CHECK_AUTH_STATE,
} from "../constants/action_types";
import { setLocalStorage, clearLocalStorage } from "../../utils/localStorage";

export const requestSignUpStart = (payload) => {
    return {
        type: REQUEST_SIGNUP_START,
        payload,
    };
};

export const requestSignUpSuccess = (payload) => {
    setLocalStorage(payload);
    return {
        type: REQUEST_SIGNUP_SUCCESS,
        payload,
    };
};

export const requestSignUpError = ({ error }) => {
    return {
        type: REQUEST_SIGNUP_FAIL,
        error,
    };
};

export const requestUserLoginStart = (payload) => {
    return {
        type: REQUEST_LOGIN_START,
        payload,
    };
};

export const requestUserLoginSuccess = (payload) => {
    setLocalStorage(payload);
    return {
        type: REQUEST_LOGIN_SUCCESS,
        payload,
    };
};

export const requestUserLoginError = ({ error }) => {
    return {
        type: REQUEST_LOGIN_FAIL,
        error,
    };
};

export const signOutStart = () => {
    clearLocalStorage();
    return {
        type: SIGNOUT,
    };
};
