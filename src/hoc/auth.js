import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthentic = localStorage.getItem("auth-status");

  if (isAuthentic) {
    return <Route {...rest} component={Component} />;
  }
  return <Redirect to="/auth/login" />;
};
