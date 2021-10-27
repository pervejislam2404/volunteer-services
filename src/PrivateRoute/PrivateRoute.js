import React from 'react';
import { Redirect, Route } from 'react-router';
import AuthProvider from '../Context/AuthProvider';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = AuthProvider()
    if(isLoading){
        return <h1>Loading</h1>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;