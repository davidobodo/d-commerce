import { combineReducers } from "redux";
import cart from "./all/cart/cart";
import signup from "./all/signup/signup";
import login from "./all/login/login";

export default combineReducers({
    cart,
    signup,
    login
});
