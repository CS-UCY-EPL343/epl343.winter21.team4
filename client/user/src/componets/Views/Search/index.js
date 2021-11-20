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
import ParkingProfile from "../Parking/ParkingProfile";

export default function Card() {
  const {path,url}=useRouteMatch();
  return (
        <Switch>
          <Route exact path={path}>
            <Search url={url}/>
          </Route>
          <Route path={`${path}/:id`}>
            <ParkingProfile url={url}/>
          </Route>
        </Switch>
  );
}
