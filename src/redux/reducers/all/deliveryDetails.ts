import * as actionTypes from "../../constants/action_types";

const initState = {};

export default (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_DELIVERY_DETAILS:
            return {
                ...state,
                ...payload
            };
        case actionTypes.CLEAR_ALL_STATE_DATA:
            return null;
        default:
            return state;
    }
};
