import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//---------------------------------------------------
//connect react, redux, firebase and firestore
//---------------------------------------------------
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

//---------------------------------------------------
//store
//---------------------------------------------------
import { Provider } from "react-redux";
import store from "./redux/store";

//---------------------------------------------------
//firebase config
//---------------------------------------------------
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: process.env.D_COMMERCE_apiKey,
//     authDomain: process.env.D_COMMERCE_authDomain,
//     databaseURL: process.env.D_COMMERCE_databaseURL,
//     projectId: process.env.D_COMMERCE_projectId,
//     storageBucket: process.env.D_COMMERCE_storageBucket,
//     messagingSenderId: process.env.D_COMMERCE_messagingSenderId,
//     appId: process.env.D_COMMERCE_appId
// };

const firebaseConfig = {
    apiKey: "***REMOVED***",
    authDomain: "d-commerce-99633.firebaseapp.com",
    databaseURL: "https://d-commerce-99633.firebaseio.com",
    projectId: "d-commerce-99633",
    storageBucket: "d-commerce-99633.appspot.com",
    messagingSenderId: "308038401229",
    appId: "1:308038401229:web:6b59c6c56e5a46b9bfbd84"
};

const firebase_init = firebase.initializeApp(firebaseConfig);

export const rsf = new ReduxSagaFirebase(firebase_init);
export const firestore = firebase.firestore();

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

const Root = (
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
