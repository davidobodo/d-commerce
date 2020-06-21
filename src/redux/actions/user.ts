import * as actionTypes from "../constants/action_types";
import { setLocalStorage } from "../../utils/localStorage";

export const getUserDataStart = (payload) => ({
    type: actionTypes.GET_FIREBASE_USER_DATA_START,
    payload,
});

//-------------------------------------------------------
//Get user document in database
//-------------------------------------------------------
export const getUserDocumentStart = (payload) => ({
    type: actionTypes.GET_USER_DOCUMENT_START,
    payload,
});

export const getUserDocumentSuccess = (payload) => ({
    type: actionTypes.GET_USER_DOCUMENT_SUCCESS,
    payload,
});

export const getUserDocumentFail = (payload) => ({
    type: actionTypes.GET_USER_DOCUMENT_FAIL,
    payload,
});

//-------------------------------------------------------
//Update user email
//-------------------------------------------------------
export const updateEmailStart = (payload) => ({
    type: actionTypes.UPDATE_EMAIL_START,
    payload,
});

export const updateEmailSuccess = (payload) => {
    setLocalStorage(payload);
    return {
        type: actionTypes.UPDATE_EMAIL_SUCCESS,
        payload,
    };
};

export const updateEmailFail = (payload) => {
    return {
        type: actionTypes.UPDATE_EMAIL_FAIL,
        payload,
    };
};

//-------------------------------------------------------
//Update user password
//-------------------------------------------------------
export const updatePasswordStart = (payload) => ({
    type: actionTypes.UPDATE_PASSWORD_START,
    payload,
});

export const updatePasswordSuccess = (payload) => {
    setLocalStorage(payload);
    return {
        type: actionTypes.UPDATE_PASSWORD_SUCCESS,
        payload,
    };
};

export const updatePasswordFail = (payload) => {
    return {
        type: actionTypes.UPDATE_PASSWORD_FAIL,
        payload,
    };
};
