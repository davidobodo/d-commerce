import * as actionTypes from "../../constants/action_types";

const initState = {
    loading: false,
    error: null,
    data: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_SIGNUP_START:
            return {
                ...state,
                loading: true,
                error: null,
                data: null
            };
        case actionTypes.REQUEST_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.data
            };
        case actionTypes.REQUEST_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error.message
            };
        case actionTypes.REQUEST_LOGIN_START:
            return {
                ...state,
                loading: true,
                error: null,
                data: null
            };
        case actionTypes.REQUEST_LOGIN_SUCCESS:
            console.log('success')
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };
        case actionTypes.REQUEST_LOGIN_FAIL:
            console.log('fail')
            return {
                ...state,
                loading: false,
                error: action.error.message
            };
        case actionTypes.SIGNOUT:
            return {
                ...state,
                data: null
            };
        default:
            return state;
    }
};
