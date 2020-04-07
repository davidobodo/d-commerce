import * as actionTypes from "../../../constants/action_types";

const initState = {
    loading: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_LOGIN_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.REQUEST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case actionTypes.REQUEST_LOGIN_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};
