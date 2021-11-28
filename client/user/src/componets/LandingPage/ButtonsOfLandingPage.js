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
  useLocation,
} from "react-router-dom";
import { isMobile } from "react-device-detect";
import * as rdd from "react-device-detect";
export default function ButtonsOfLandingPage({ children }) {
  const { pathname } = useLocation();
  let buttonwidth = 0;
  // rdd.isMobile=true;
  if (isMobile) {
    buttonwidth = "80%";
  } else {
    buttonwidth = "20%";
  }
  return (
    <Stack width={buttonwidth} alignSelf="center" p="5">
      <Link as={RouterLink} to="login">
        <Button width="full">LOG IN</Button>
      </Link>

      <Link as={RouterLink} to="/signup">
        <Button width="full">SIGN UP </Button>
      </Link>
      {/* <Button width="full">ONE TIME PAYMENT </Button> */}
    </Stack>
  );
}
