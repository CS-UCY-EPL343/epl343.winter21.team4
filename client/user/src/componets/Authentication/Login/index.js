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
  FormControl,
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";
import LandingPage from "../../LandingPage";
import Password from "../Password";
import { isMobile } from "react-device-detect";
import * as rdd from "react-device-detect";
// import { setUserSession } from "../../../utils/common";
// import axios from 'axios';
// import React, { useState } from 'react';

export default function LogIn(url) {
  let formsize = 0;
  //rdd.isMobile=true;
  if (isMobile) {
    formsize = "80%";
  } else {
    formsize = "20%";
  }

  return (
    <Stack
      direction="column"
      justify="center"
      px={{ sm: 4, lg: 8 }}
      minH="full"
      bg="#16DABF"
    >
      <Heading
        mt={6}
        textAlign="center"
        fontSize="xl"
        fontWeight="extrabold"
        color="black"
        paddingBottom="5"
      >
        <Text>Log In to your account</Text>
      </Heading>

      {/* Form for login authentication */}

      <Stack width={formsize} alignSelf="center">
        <form >
          {/* <form> */}
          <Input
            variant="filed"
            placeholder="Email"
            name="email_login"
            id="email_login"
            type="email"
          />

          {/* <Password /> */}
          <div>
            <Stack alignSelf="center" paddingTop="1rem" paddingBottom="1rem">
              <Input
                variant="filed"
                type="password"
                placeholder="Enter Password"
                name="password_login"
                id="password_login"
              />
            </Stack>
          </div>
          <Link as={RouterLink} to="/user/home">
            <Button width="full" type="submit">
              LOG IN
            </Button>
          </Link>
        </form>
      </Stack>
    </Stack>
  );
}
