import { combineReducers } from "redux";
import cart from "./all/cart/cart";
import signup from "./all/signup/signup";
import login from "./all/login/login";
import signout from "./all/signout/signout";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
    cart,
    signup,
    login,
    signout,
    firebaseReducer,
    firestoreReducer
});
