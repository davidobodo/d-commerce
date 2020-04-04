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
