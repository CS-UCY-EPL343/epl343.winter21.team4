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

export default function Profile() {
  return (
    <Link as={RouterLink} to="/search">
      <Text>THIS IS THE PROFILE PAGE</Text>
      <Button width="full">GO TO SEARCH</Button>
    </Link>
  );
}
