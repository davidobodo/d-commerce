import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
const reduxExtension = require("redux-devtools-extension");

const sagaMiddleware = createSagaMiddleware();

const persitConfig = {
    key: 'd-commerce',
    storage,
};

const allMiddlewares = middleware => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = reduxExtension;
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const persistedReducer = persistReducer(persitConfig, rootReducer);

const store = createStore(persistedReducer, allMiddlewares([sagaMiddleware]));

const persistedStore = persistStore(store)

sagaMiddleware.run(rootSaga);

export { store as default, persistedStore };
