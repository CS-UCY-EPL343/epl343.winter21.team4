import {
    Text,
    Box,
    Heading,
    Button,
    Stack,
    Icon,
    Input,
    Link,
  } from "@chakra-ui/react";
  import { FaCar } from "react-icons/fa";
  import LogIn from "../Authentication/Login";
  import {
    BrowserRouter,
    Route,
    Switch,
    Link as RouterLink,
    useLocation
  } from "react-router-dom";
  
  export default function ButtonsOfLandingPage({children}) {
    const { pathname } = useLocation();
    return (
        <Stack width="52" alignSelf="center">
          <Link as={RouterLink} to="login">
            <Button width="full">LOG IN</Button>
          </Link>
  
          <Link as={RouterLink} to="/signup">
            <Button width="full">SIGN UP </Button>
          </Link>
          <Button width="full">ONE TIME PAYMENT </Button>
        </Stack>
        
    );
  }
  