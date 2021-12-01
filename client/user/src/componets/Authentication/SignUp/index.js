import {
  Text,
  Box,
  Heading,
  Button,
  Stack,
  Icon,
  Input,
  Link,
  HStack,
  FormControl,
  FormErrorIcon,
  Field,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import fs from "fs";
import { Link as RouterLink } from "react-router-dom";
import { isMobile } from "react-device-detect";
import * as rdd from "react-device-detect";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";

export default function SignUp() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  let formsize = 0;
  //rdd.isMobile=true;
  if (isMobile) {
    formsize = "80%";
  } else {
    formsize = "20%";
  }

  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aanrjhx",
        "template_glxm7pi",
        e.target,
        "user_eZGUuUAHiQaosrQNdkcJi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // Email enable
    
    e.target.reset();
  }

  return (
    <Stack
      bgColor="#16DABF"
      alignContent="center"
      textAlign="centre"
      display="flex"
      flexDirection="column"
      boxSize="3xl"
      blockSize="full"
      width="full"
      height="full"
      minHeight="full"
      minWidth="full"
    >
      <Heading
        mt={6}
        textAlign="center"
        fontSize="xl"
        fontWeight="extrabold"
        color="black"
        paddingBottom="5"
      >
        <Text>Create a new account</Text>
      </Heading>
      <form style={{ "text-align": "-webkit-center" }} onSubmit={sendMail}>
        <Stack spacing={3} alignSelf="center" width={formsize}>
          <HStack>
            <input type="hidden" name="id_body" value={uuidv4()} readOnly required></input>
            <input type="hidden" name="created_body" value={date} readOnly required />
            <Input
              size="md"
              variant="filled"
              placeholder="First Name"
              type="text"
              name="firstname_body"
              style={{ "margin-left": "0rem" }}
              required
            />
            <Input
              size="md"
              variant="filled"
              placeholder="Last Name"
              type="text"
              name="lastname_body"
              required
            />
          </HStack>
          <Input
            size="md"
            variant="filled"
            placeholder="Email"
            type="email"
            name="email_body"
            required
          />
          <Input
            size="md"
            variant="filled"
            placeholder="Phone Number"
            type="tel"
            name="phone_body"
            required
          />
          <Input
            size="md"
            variant="filled"
            placeholder="Password"
            type="password"
            required
          />
          <Input
            size="md"
            variant="filled"
            placeholder="Repeat Password"
            type="password"
            name="password_body"
            required
          />
          <Button width="full" type="submit">
            SIGN UP
          </Button>
          <Link as={RouterLink} to="/login"></Link>
        </Stack>
      </form>
    </Stack>
  );
}
