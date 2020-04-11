import * as actionTypes from "../../../constants/action_types";

const initState = {
    loading: false,
    error: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_SIGNUP_START:
            return {
                ...state,
                loading: true,
                erro: null
            };
        case actionTypes.REQUEST_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case actionTypes.REQUEST_SIGNUP_FAIL:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
