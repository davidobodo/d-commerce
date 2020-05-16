import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./routing/routes";
import { useDispatch } from 'react-redux';


import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from "./styling/themes";
import ScrollToTop from "./utils/scrollToTop/scrollToTop";
import { checkAuthState } from './redux/actions/auth';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuthState())
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
