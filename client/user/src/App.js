import logo from "./logo.svg";
import "./App.css";
import { Text, Box, Heading, ChakraProvider } from "@chakra-ui/react";
import Main from "./componets/Main";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
