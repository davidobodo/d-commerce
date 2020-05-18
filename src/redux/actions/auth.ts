import {
    REQUEST_SIGNUP_FAIL,
    REQUEST_SIGNUP_START,
    REQUEST_SIGNUP_SUCCESS,
    REQUEST_LOGIN_START,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAIL,
    SIGNOUT,
    CHECK_AUTH_STATE
} from "../constants/action_types";



export const requestSignUpStart = payload => {
    return {
        type: REQUEST_SIGNUP_START,
        payload
    };
};

export const requestSignUpSuccess = () => {
    return {
        type: REQUEST_SIGNUP_SUCCESS,
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
    const expirationDate = new Date().getTime() + 20000;
    localStorage.setItem('token', payload.idToken)
    localStorage.setItem('userId', payload.localId)
    localStorage.setItem('expirationDate', JSON.stringify(expirationDate))
    return {
        type: REQUEST_LOGIN_SUCCESS,
        payload
    };
};

export const requestUserLoginError = ({ error }) => {
    return {
        type: REQUEST_LOGIN_FAIL,
        error
    };
};

export const signOutStart = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
        type: SIGNOUT
    };
};

