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

export const editItemQuantity = (cartProductId, num) => {
    return {
        type: actionTypes.UPDATE_COUNT,
        cartProductId,
        num
    };
};

export const deleteCartItem = cartProductId => {
    return {
        type: actionTypes.DELETE_CART_ITEM,
        cartProductId
    };
};
