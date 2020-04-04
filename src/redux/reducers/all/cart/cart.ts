import * as actionTypes from "../../../constants/action_types";
import { cartActionInterface } from "./cartInterface";
const initState = null;

export default (state = initState, action: cartActionInterface) => {
    const {
        type,
        cartProductId,
        productSize,
        productQuantity,
        name,
        image,
        price
    } = action;

    switch (type) {
        case actionTypes.UPDATE_CART:
            return {
                ...state,
                [cartProductId]: {
                    name,
                    image,
                    price,
                    productSize,
                    productQuantity
                }
            };
        default:
            return state;
    }
};
