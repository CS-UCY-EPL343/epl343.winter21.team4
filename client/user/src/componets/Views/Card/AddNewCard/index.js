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
  } from "@chakra-ui/react";
  import { FaCar,FaCcMastercard,FaPlus,FaCcVisa } from "react-icons/fa";
  import {
    BrowserRouter,
    Route,
    Switch,
    Link as RouterLink,
    NavLink,
  } from "react-router-dom";
  
  export default function AddNewCard({url}) {
    return (
          <Stack width="-webkit-fill-available">
          <Heading paddingTop="10" alignSelf="center">Card Details</Heading>
          <Stack width="min-content" alignSelf="center">
           
          </Stack>
          </Stack>
    );
  }
  