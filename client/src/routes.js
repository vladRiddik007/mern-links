import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./Pages/AuthPage";
import { CreatePage } from "./Pages/CreatePage";
import { DetailPage } from "./Pages/DetailPage";
import { LinksPage } from "./Pages/LinksPage";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id" exact>
          <DetailPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
