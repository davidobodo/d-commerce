import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './routing/routes';


const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: sans-serif;
  }

  h1{
    font-size: 70px;
    font-weight: 600;
  }
`

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
