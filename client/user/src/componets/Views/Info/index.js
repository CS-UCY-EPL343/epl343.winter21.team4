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
  Select,
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";
import LandingPage from "../../LandingPage";
import { facar, FaInfoCircle } from "react-icons/fa";
import emailjs from "emailjs-com"; //npm i emailjs-com
import { useState } from "react";
import Layout from "../NavigationBar/Layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function Info() {
  function sendMail(e) {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_aanrjhx",
    //     "template_ixojhss",
    //     e.target,
    //     "user_eZGUuUAHiQaosrQNdkcJi"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // Email enable
    e.target.reset();
  }

  return (
    <Stack
      paddingTop="5"
      paddingLeft="5"
      paddingRight="5"
      alignContent="center"
      width="-webkit-fill-available"
    >
      <HStack>
        <FaInfoCircle size="50" color="#16dabf" />
        <Heading>Get in Touch</Heading>
      </HStack>
      <form paddingTop="10" alignSelf="center" onSubmit={sendMail}>
        <FormLabel>Full Name</FormLabel>
        <Input
          color="#c1c1c1"
          type="text"
          backgroundColor="gray.200"
          textColor="black"
          name="name"
        />
        <FormLabel>Mobile Phone</FormLabel>
        <Input
          color="#c1c1c1"
          type="tel"
          backgroundColor="gray.200"
          textColor="black"
          name="phone"
        />
        <FormLabel>Reason for contacting</FormLabel>
        <Select placeholder="Select" name="options">
          <option>parapono</option>
          <option>enimerosi</option>
          <option>isasten kolokoi</option>
        </Select>
        <FormLabel>Message</FormLabel>
        <Input
          color="#c1c1c1"
          type="text"
          backgroundColor="gray.200"
          height="150"
          textColor="black"
          name="message"
        />
        <Stack paddingTop="10" alignSelf="center" alignContent="center">
          <Button
            size="lg"
            alignSelf="centre"
            backgroundColor="#181A18"
            textColor="white"
            type="submit"
          >
            SUBMIT
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
