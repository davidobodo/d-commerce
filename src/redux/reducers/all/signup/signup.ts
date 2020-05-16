import * as actionTypes from "../../../constants/action_types";

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
                erro: null,
                data: null
            };
        case actionTypes.REQUEST_SIGNUP_SUCCESS:
            console.log(action.data, 'action')
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
        default:
            return state;
    }
};
