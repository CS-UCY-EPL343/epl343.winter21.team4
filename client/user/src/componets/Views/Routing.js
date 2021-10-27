import { Box } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Search from "./Search";

export function Routing() {
  return (
    <Box h="100vh" bg="gray.50">
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  );
}
