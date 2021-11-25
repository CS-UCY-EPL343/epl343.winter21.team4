import logo from "./logo.svg";
import "./App.css";
import { Text, Box, Heading, ChakraProvider } from "@chakra-ui/react";
import Main from "./componets/Main";

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
