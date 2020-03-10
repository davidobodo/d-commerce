import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routing/routes';

import { GlobalStyles } from './GlobalStyles';




const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          {Routes.map((route, i) => {
            const { component, exact, path } = route
            return <Route key={path} exact={exact} path={path} component={component} />
          })
          }
        </Switch>
      </Router>
    </>
  )
}

export default App;
