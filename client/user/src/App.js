import logo from "./logo.svg";
import "./App.css";
import { Text, Box, Heading, ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./componets/LandingPage";
import { render } from "react-dom";
import LogIn from "./componets/Authentication/Login";
import SignUp from "./componets/Authentication/SignUp";
import Main from "./componets/Main";
import { Switch, Link, Route, BrowserRouter } from "react-router-dom";

import React from "react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        {/* <Switch>
          <Route path="/">
            <LandingPage />
          </Route>

          <Route path="/Login">
            <LogIn />
          </Route>

          <Route path="/Signup">
            <SignUp />
          </Route>
        </Switch> */}
        <LandingPage />
        <Route path="/signup">
          <SignUp />
        </Route>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
