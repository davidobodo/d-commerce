import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
    REQUEST_LOGIN_START,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAIL,
    SIGNOUT_START,
    SIGNOUT_SUCCESS,
    SIGNOUT_FAIL
} from "../constants/action_types";

export const requestSignUpStart = payload => {
    return {
        type: REQUEST_SIGNUP_START,
        payload
    };
};

export const requestSignUpSuccess = payload => {
    return {
        type: REQUEST_SIGNUP_SUCCESS,
        payload
    };
};

export const requestSignUpError = ({ error }) => {
    return {
        type: REQUEST_SIGNUP_FAIL,
        error
    };
};

export const requestUserLoginStart = payload => {
    return {
        type: REQUEST_LOGIN_START,
        payload
    };
};

export const requestUserLoginSuccess = payload => {
    return {
        type: REQUEST_LOGIN_SUCCESS,
        payload
    };
};

export const requestUserLoginError = payload => {
    return {
        type: REQUEST_LOGIN_FAIL,
        payload
    };
};

export const signOutStart = () => {
    return {
        type: SIGNOUT_START
    };
};
export const signOutSuccess = payload => {
    return {
        type: SIGNOUT_SUCCESS,
        payload
    };
};
export const signOutError = payload => {
    return {
        type: SIGNOUT_FAIL,
        payload
    };
};
