import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { Routes } from "./routing/routes";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";

import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from "./styling/themes";
import ScrollToTop from "./utils/scrollToTop/scrollToTop";
import { signOutStart, requestUserLoginSuccess } from "./redux/actions/auth";
import { getLocalStorage } from "./utils/localStorage";

const App = () => {
    const dispatch = useDispatch();

    const {
        token,
        userId,
        refreshToken,
        expirationTime,
        userName,
    } = getLocalStorage();

    useEffect(() => {
        if (!token) {
            dispatch(signOutStart());
        } else {
            const userData = {
                userId,
                token,
                firstName: userName,
                refreshToken: refreshToken,
                sessionActive: true,
            };
            dispatch(requestUserLoginSuccess(userData));
        }
    });

    useEffect(() => {
        const delay = parseInt(expirationTime) - new Date().getTime();
        if (expirationTime) {
            setTimeout(() => {
                dispatch(signOutStart());
            }, delay);
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <ScrollToTop />
                <Switch>
                    {Routes.map((route, i) => {
                        const {
                            component,
                            exact,
                            path,
                            protected: _protected,
                        } = route;
                        return _protected === false ? (
                            <Route
                                key={i}
                                exact={exact}
                                path={path}
                                component={component}
                            />
                        ) : (
                            <ProtectedRoute
                                key={i}
                                exact={exact}
                                path={path}
                                component={component}
                            />
                        );
                    })}
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
