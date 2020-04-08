import * as actionTypes from "../../../constants/action_types";
import { cartItemInterface } from "./cartInterface";
import { cloneObject } from "../../../../utils";

const initState = null;

export default (state = initState, action: cartItemInterface) => {
    switch (action.type) {
        case actionTypes.UPDATE_CART:
            const {
                cartProductId,
                productSize,
                productQuantity,
                name,
                image,
                price
            } = action;
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
        case actionTypes.UPDATE_COUNT:
            let { num, cartProductId: _cartProductId } = action;
            return {
                ...state,
                [_cartProductId]: {
                    ...state,
                    productQuantity: num
                }
            };
        case actionTypes.DELETE_CART_ITEM:
            let { cartProductId: id } = action;
            const clonedState = cloneObject(state);
            delete clonedState[id];
            return clonedState;
        default:
            return state;
    }
};
