import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const userId = useSelector(state => state.auth.userId)
    return <Route {...rest} render={(props) => (!!userId ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)} />
}

export default ProtectedRoute;