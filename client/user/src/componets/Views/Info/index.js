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
  Select
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";
import LandingPage from "../../LandingPage";
import { facar,FaInfoCircle } from "react-icons/fa";
import Layout from "../NavigationBar/Layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

export default function Info() {
  return (
    <Stack paddingTop="5" paddingLeft="5" paddingRight="5" alignContent="center" width="-webkit-fill-available">
      <HStack>
        <FaInfoCircle size="50" color="#16dabf"/>
        <Heading>Get in Touch</Heading>
      </HStack>
      <FormControl paddingTop="10" alignSelf="center">
        <FormLabel>Full Name</FormLabel>
        <Input color="#c1c1c1" type="text" backgroundColor="gray.200" textColor="black" />
        <FormLabel>Mobile Phone</FormLabel>
        <Input color="#c1c1c1" type="tel" backgroundColor="gray.200" textColor="black"/>
        <FormLabel>Reason for contacting</FormLabel>
        <Select placeholder="Select">
          <option>parapono</option>
          <option>enimerosi</option>
          <option>isasten kolokoi</option>
        </Select>
        <FormLabel>Message</FormLabel>
        <Input color="#c1c1c1" type="text" backgroundColor="gray.200" height="150" textColor="black"/>
      </FormControl>
      <Stack paddingTop="10" alignSelf="center" alignContent="center">
      <Button size="lg" alignSelf="centre" backgroundColor="#181A18" textColor="white">
        SUBMIT
      </Button>
      </Stack>
    </Stack>
  );
}
