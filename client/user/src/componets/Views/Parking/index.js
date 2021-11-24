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
  import Search from "./SearchPage";
  import ParkingProfiles from "../Parking/ParkingProfile";
  
  export default function SearchParkingPage() {
    const {path,url}=useRouteMatch();
    return (
          <Switch>
            <Route path={`${path}/paynow`}>
              <Text>koasidnjan</Text>
            </Route>
          </Switch>
    );
  }
  