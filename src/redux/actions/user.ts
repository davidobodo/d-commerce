import * as actionTypes from "../constants/action_types";

export const getUserDataStart = (payload) => ({
    type: actionTypes.GET_USER_DATA_START,
    payload,
});
