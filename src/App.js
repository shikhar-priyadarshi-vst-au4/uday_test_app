import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./modules/login";
import { Main } from "./modules/main";
import { PrivateRoute } from "./hoc/auth";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/auth/login"} render={() => <Login />} />
          <PrivateRoute exact path={"/main"} component={Main} />

          <Route
            path={"*"}
            render={() => {
              window.location.href = "/auth/login";
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}
