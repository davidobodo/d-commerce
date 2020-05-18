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

    console.log(expirationTime)
    console.log(parseInt(expirationTime))
    console.log(new Date().getTime())
    // useEffect(() => {
    //     if (!token) {
    //         dispatch(signOutStart())
    //     } else if (token && expirationTime < JSON.stringify(new Date().getTime())) {
    //         dispatch(signOutStart())
    //     } else {
    //         if (expirationTime > JSON.stringify(new Date())) {

    //             const localId = localStorage.getItem('userId')
    //             const userData = {
    //                 localId
    //             }
    //             dispatch(requestUserLoginSuccess(userData));
    //         }
    //     }

    //     setTimeout(() => {
    //         // console.log('it is working yes yes yes')
    //     }, parseInt(expirationTime) - new Date().getTime())
    // })

    useEffect(() => {
        setTimeout(() => {
            dispatch(signOutStart())
        }, parseInt(expirationTime) * 1000)
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
