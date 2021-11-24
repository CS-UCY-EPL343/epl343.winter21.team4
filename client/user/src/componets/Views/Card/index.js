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
import CardList from "./CardList";
import AddNewCard from "./AddNewCard";

export default function Card() {
  const {path,url}=useRouteMatch();
  return (
        <Switch>
          <Route exact path={path}>
            <CardList url={url}/>
          </Route>
          <Route path={`${path}/addnewcard`}>
            <AddNewCard/>
          </Route>
          <Route path={`${path}/paynow`}>
            kdsjnj
          </Route>
        </Switch>
  );
}
