import { Box } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import LandingPage from "./LandingPage";
import Search from "./Views/Search";
import Profile from "./Views/Profile";
import Layout from "./Views/NavigationBar/Layout";
import Card from "./Views/Card";
import Info from "./Views/Info";

export function Unauthorized() {
  return (
    <Box h="100vh" bg="gray.50">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/profile">
            <Layout>
              <Profile />
            </Layout>
          </Route>
          <Route exact path="/search">
            <Layout>
              <Search />
            </Layout>
          </Route>
          <Route exact path="/card">
            <Layout>
              <Card />
            </Layout>
          </Route>
          <Route exact path="/info">
            <Layout>
              <Info />
            </Layout>
          </Route>
          <Route exact path="/onetimepayment"></Route>
          <Route path="*">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  );
}
