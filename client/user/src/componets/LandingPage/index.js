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
import { FaCar, FaCcMastercard, FaPlus, FaCcVisa } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  Link as RouterLink,
} from "react-router-dom";
import LandingPageLayout from "./LandingPage";
import Login from "./../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import ButtonsOfLandingPage from "./ButtonsOfLandingPage";

export default function LandingPage() {
  const { path, url } = useRouteMatch();

  return (
    <LandingPageLayout>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <ButtonsOfLandingPage />
        </Route>
      </Switch>
    </LandingPageLayout>
  );
}
