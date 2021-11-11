import { Box } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Profile from "../Profile";
import Search from "../Search";

export function Routing() {
  return (
    <Box h="100vh" bg="gray.50">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="*">
              <Search />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </Box>
  );
}
