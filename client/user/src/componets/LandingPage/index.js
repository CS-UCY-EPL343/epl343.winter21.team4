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

  const getAPI = () => {
    // Change this endpoint to whatever local or online address you have
    // Local PostgreSQL Database
    const API = "http://127.0.0.1:5000/";

    fetch(API)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setApiData(data);
      });
  };

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
