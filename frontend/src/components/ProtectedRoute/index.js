import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useGlobalContext } from '../../context';

export default function ProtectedRoute({ component: Component, ...props }) {
  const { loggedIn } = useGlobalContext();
  console.log(loggedIn, useGlobalContext());

  return (
    <Route
      {...props}
      render={
        componentProps => (
          loggedIn ?
            <Component {...componentProps} /> :
            <Redirect to="/login" />
        )
      }
    />
  );
}