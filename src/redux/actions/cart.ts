import * as actionTypes from "../constants/action_types";

export const updateCart = productDetails => {
    console.log(productDetails);
    return {
        type: actionTypes.UPDATE_CART
    };
};
