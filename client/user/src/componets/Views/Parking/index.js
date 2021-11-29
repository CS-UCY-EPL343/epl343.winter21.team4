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
  import ParkingProfiles from "../Parking/ParkingProfile";
  import ChoosePaymentMethod from "../ChoosePayment";
  
  export default function SearchParkingPage() {
    const {path,url}=useRouteMatch();
    return (
          <Switch>
            
            <Route path={`${url}/paynow`}>
              <ChoosePaymentMethod/>
            </Route>
            
            <Route path={path}>
              <ParkingProfiles/>
            </Route>
           
          </Switch>
    );
  }
  