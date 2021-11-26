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
import Search from "./SearchPage/index";
import ParkingProfile from "../Parking/ParkingProfile";
import SearchParkingPage from "./../Parking";

export default function SearchPage() {
  const {path,url}=useRouteMatch();
  return (
        <Switch>
          <Route exact path={path}>
            <Search url={url}/>
          </Route>
          <Route path={`${path}/:id`}>
            <SearchParkingPage url={url}/>
          </Route>
          {/* <Route exact path={`${path}/paynow`}>
            <Text>jkhvjghvjh</Text>
          </Route> */}
        </Switch>
  );
}
