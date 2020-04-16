import * as actionTypes from "../constants/action_types";

export const setDeliveryDetails = payload => {
    return {
        type: actionTypes.SET_DELIVERY_DETAILS,
        payload
    };
};
