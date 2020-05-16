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

export const requestSignUpSuccess = data => {
    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    localStorage.setItem('expirationDate', JSON.stringify(expirationDate))
    return {
        type: REQUEST_SIGNUP_SUCCESS,
        data
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
