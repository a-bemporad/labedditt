import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import FeedPage from "../pages/FeedPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const Router = ({ logged, setLogged }) => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <LoginPage logged={logged} setLogged={setLogged} />
      </Route>
      <Route exact path={"/signup"}>
        <SignUpPage logged={logged} setLogged={setLogged} />
      </Route>
      <Route exact path={"/feed"}>
        <FeedPage />
      </Route>
      <Route exact path={"/posts/:postId"}>
        <PostDetailsPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
