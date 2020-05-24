import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "./routing/routes";
import { useDispatch, useSelector } from 'react-redux';


import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from "./styling/themes";
import ScrollToTop from "./utils/scrollToTop/scrollToTop";
import { signOutStart, requestUserLoginSuccess } from './redux/actions/auth';



const ProtectedRoute = ({ component: Component, ...rest }) => {
    const userId = useSelector(state => state.auth.userId)
    return <Route {...rest} render={(props) => (!!userId ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)} />
}

const App = () => {
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('expirationDate');
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        if (!token) {
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
        if (expirationTime) {
            setTimeout(() => {
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
                        const { component, exact, path, protected: _protected } = route;
                        return _protected === false
                            ?
                            <Route
                                key={i}
                                exact={exact}
                                path={path}
                                component={component}
                            />
                            :
                            <ProtectedRoute
                                key={i}
                                exact={exact}
                                path={path}
                                component={component}
                            />
                    })}
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
