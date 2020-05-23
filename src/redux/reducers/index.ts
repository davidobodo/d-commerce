import { combineReducers } from "redux";
import cart from "./all/cart";
import auth from "./all/auth";
import deliveryDetails from "./all/deliveryDetails";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
    cart,
    auth,
    deliveryDetails,
    firebaseReducer,
    firestoreReducer
});
