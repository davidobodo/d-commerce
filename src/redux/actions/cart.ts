import * as actionTypes from "../constants/action_types";

export const updateCart = (
    cartProductId,
    name,
    image,
    price,
    productSize,
    productQuantity
) => {
    return {
        type: actionTypes.UPDATE_CART,
        cartProductId,
        name,
        image,
        price,
        productSize,
        productQuantity
    };
};

export const updateCount = (num, cartProductId) => {
    return {
        type: actionTypes.UPDATE_COUNT,
        num,
        cartProductId
    };
};
