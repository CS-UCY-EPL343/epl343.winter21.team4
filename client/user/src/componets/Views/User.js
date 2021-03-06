import { Box,Text } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Authentication/Login";
import Search from "./Search";
import Profile from "./Profile";
import Layout from "./NavigationBar/Layout";
import Card from "./Card";
import Info from "./Info";
import LogIn from "../Authentication/Login";
import Home from "./Home";
import ThankYou from "./ThankYou"

export default function User() {
  return (
    <Box h="100vh" bg="gray.50">
      <BrowserRouter basename="/user" >
        <Layout>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/card">
              <Card />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/thankyou">
              <ThankYou/>
            </Route>
            {/* <Route path="*">
              <Search />
            </Route> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}
