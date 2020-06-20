import * as actionTypes from "../../constants/action_types";

interface UserState {
    isLoading: boolean;
    error: unknown;
    data: unknown;
}

interface Action {
    type: string;
    payload: unknown;
}

const initialState: UserState = {
    isLoading: false,
    error: null,
    data: null,
};

const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.GET_FIREBASE_USER_DATA_START:
            return state;
        case actionTypes.GET_USER_DOCUMENT_START:
            return {
                ...state,
                isLoading: true,
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
                isLoading: true,
            };
        case actionTypes.UPDATE_EMAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default userReducer;
