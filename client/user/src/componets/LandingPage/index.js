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
    useRouteMatch,
    Link as RouterLink,
  } from "react-router-dom";
  import LandingPageLayout from "./LandingPage";
  import Login from "./../Authentication/Login"
  
  export default function LandingPage() {
    const {path,url}=useRouteMatch();
    return (
          <Switch>
            <LandingPageLayout>
              <Route path="*">
                <Text>kolokos</Text>
              </Route>
              <Route path={`${path}/login`}>
              <Text>kolokos</Text>
              </Route>
            </LandingPageLayout>
          </Switch>
    );
  }
  