import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";
const reduxExtension = require("redux-devtools-extension");

const sagaMiddleware = createSagaMiddleware();

const allMiddlewares = middleware => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = reduxExtension;
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, allMiddlewares([sagaMiddleware]));

sagaMiddleware.run(rootSaga);

export default store;
