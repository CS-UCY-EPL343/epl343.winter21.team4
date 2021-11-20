import {
    Text,
    Box,
    Heading,
    Button,
    Stack,
    Icon,
    Input,
    show,
    handleClick,
    InputRightElement,
    Flex,
    HiCheck,
    HStack,
    formState,
    form,
    Link,
    NumberInput,
    NumberInputField,
    IconButton,
    Image,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    BrowserRouter,
    Route,
    Switch,
    Link as RouterLink,
    NavLink,
    useLocation,
  } from "react-router-dom";
  import { useState } from "react";
  import Data from "./MOCK_DATA.json";
  
  export default function Home(url) {
    const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
    const [value, setValue] = React.useState("");
    const {pathname}=useLocation();
  
    return (
      <Stack width="-webkit-fill-available" align="center">
        <Heading paddingTop="10" alignSelf="center" alignItems="center">Home page</Heading>
        <Stack paddingTop="5">
         
        </Stack>
      </Stack>
    );
  }
  