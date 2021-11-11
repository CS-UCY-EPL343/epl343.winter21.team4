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
import { FaCar } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";
import LandingPage from "../../LandingPage";

export default function Card() {
  return (
    <Link as={RouterLink} to="/card">
      <Text>THIS IS THE SEARCH PAGE</Text>
      <Button width="full">GO TO PROFILE</Button>
    </Link>
  );
}
