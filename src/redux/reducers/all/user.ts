import * as actionTypes from "../../constants/action_types";

interface UserState {
    emailIsLoading: boolean;
    passwordIsLoading: boolean;
    error: unknown;
    data: unknown;
    updateEmailSuccessMsg: string;
    updateEmailFailMsg: string;
    updatePasswordSuccessMsg: string;
    updatePasswordFailMsg: string;
}

interface Action {
    type: string;
    payload: any;
}

const initialState: UserState = {
    emailIsLoading: false,
    passwordIsLoading: false,
    error: null,
    data: null,
    updateEmailSuccessMsg: "",
    updateEmailFailMsg: "",
    updatePasswordSuccessMsg: "",
    updatePasswordFailMsg: "",
};

const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_FIREBASE_USER_DATA_START:
            return state;
        case actionTypes.GET_USER_DOCUMENT_START:
            return {
                ...state,
            };
        case actionTypes.GET_USER_DOCUMENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case actionTypes.GET_USER_DOCUMENT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case actionTypes.UPDATE_EMAIL_START:
            return {
                ...state,
                emailIsLoading: true,
                updateEmailSuccessMsg: "",
                updateEmailFailMsg: "",
            };
        case actionTypes.UPDATE_EMAIL_SUCCESS:
            return {
                ...state,
                emailIsLoading: false,
                error: null,
                updateEmailSuccessMsg: "Email updated Successfully",
                updateEmailFailMsg: "",
            };
        case actionTypes.UPDATE_EMAIL_FAIL:
            return {
                ...state,
                emailIsLoading: false,
                updateEmailFailMsg: action.payload.error.message,
                updateEmailSuccessMsg: "",
            };
        case actionTypes.UPDATE_PASSWORD_START:
            return {
                ...state,
                passwordIsLoading: true,
                updatePasswordSuccessMsg: "",
                updatePasswordFailMsg: "",
            };
        case actionTypes.UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                passwordIsLoading: false,
                error: null,
                updatePasswordSuccessMsg: "Password updated Successfully",
                updatePasswordFailMsg: "",
            };
        case actionTypes.UPDATE_PASSWORD_FAIL:
            return {
                ...state,
                passwordIsLoading: false,
                updatePasswordFailMsg: action.payload.error.message,
                updatePasswordSuccessMsg: "",
            };
        default:
            return state;
    }
};

export default userReducer;
