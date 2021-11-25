import logo from "./logo.svg";
import "./App.css";
import { Text, Box, Heading, ChakraProvider } from "@chakra-ui/react";
import Main from "./componets/Main";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
