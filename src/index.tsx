import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// require("dotenv").config();

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
import store, { persistedStore } from "./redux/store";

//---------------------------------------------------
//firebase config
//---------------------------------------------------
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { PersistGate } from 'redux-persist/integration/react';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
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
            <PersistGate persistor={persistedStore} loading={null}>
                <App />
            </PersistGate>
        </ReactReduxFirebaseProvider>
    </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
