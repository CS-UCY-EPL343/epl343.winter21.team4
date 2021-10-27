import { Box } from "@chakra-ui/react";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import LandingPage from "./LandingPage";

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
          <Route exact path="/onetimepayment"></Route>
          <Route path="*">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  );
}
