import * as actionTypes from "../../../constants/action_types";

const initState = {
    loading: false,
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_LOGIN_START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actionTypes.REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.REQUEST_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
