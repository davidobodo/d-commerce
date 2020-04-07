import * as actionTypes from "../../../constants/action_types";

const initState = {
    loading: false
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SIGNOUT_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case actionTypes.SIGNOUT_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};
