import React from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./routing/routes";


import { GlobalStyles } from "./styling/GlobalStyles";
import { theme } from "./styling/themes";
import ScrollToTop from "./utils/scrollToTop/scrollToTop";
import ErrorBoundary from './utils/errorBoundary/erroBoundary';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    <Route {...rest} render={(props) =>} />
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <ScrollToTop />
                <Switch>
                    <ErrorBoundary>
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
                    </ErrorBoundary>
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
