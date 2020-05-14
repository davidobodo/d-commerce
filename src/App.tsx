import React from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./routing/routes";

import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from "./styling/themes";
import ScrollToTop from "./utils/scrollToTop/scrollToTop";

const App = () => {
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
                                key={path}
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
