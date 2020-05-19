import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./routing/routes";
import { useDispatch } from 'react-redux';


import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from "./styling/themes";
import ScrollToTop from "./utils/scrollToTop/scrollToTop";
import { signOutStart, requestUserLoginSuccess } from './redux/actions/auth';

const App = () => {
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('expirationDate');
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        if (!token) {
            console.log('dispatched when token doesnt exist')
            dispatch(signOutStart())
        } else {
            const userData = {
                localId: userId,
                idToken: token,
                sessionActive: true
            }
            dispatch(requestUserLoginSuccess(userData));
        }


    })

    useEffect(() => {
        const delay = parseInt(expirationTime) - new Date().getTime();
        console.log(new Date().getTime(), 'current time')
        console.log(parseInt(expirationTime), 'local storage time')
        console.log(delay)
        console.log(expirationTime)
        if (expirationTime) {
            setTimeout(() => {
                console.log('dispatched when timing was up')
                dispatch(signOutStart())
            }, delay)
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <ScrollToTop />
                <Switch>
                    {Routes.map((route, i) => {
                        const { component, exact, path } = route;
                        return (
                            <Route
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
