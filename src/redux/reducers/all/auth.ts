import * as actionTypes from "../../constants/action_types";

const initState = {
    loading: false,
    error: null,
    userId: null,
    idToken: null,
    userName: "",
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_SIGNUP_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.REQUEST_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                userId: action.payload.userId,
                idToken: action.payload.token,
                userName: action.payload.firstName,
            };
        case actionTypes.REQUEST_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error.message,
            };
        case actionTypes.REQUEST_LOGIN_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userId: action.payload.localId,
                idToken: action.payload.idToken,
            };
        case actionTypes.REQUEST_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error.message,
            };
        case actionTypes.SIGNOUT:
            return {
                ...state,
                userId: null,
                idToken: null,
            };
        default:
            return state;
    }
};
