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
import { Link as RouterLink } from "react-router-dom";
import { isMobile } from "react-device-detect";
import * as rdd from "react-device-detect";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  var today = new Date();
  //  var date = today.getFullYear() + "-" + (today.getUTCMonth()+1) + "-" + today.getDate();
  var Fulldate = today.toISOString();
  var date = Fulldate.split("T");

  let formsize = 0;
  //rdd.isMobile=true;
  if (isMobile) {
    formsize = "80%";
  } else {
    formsize = "20%";
  }

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [phone, SetPhone] = useState("");
  const [Fname, SetFname] = useState("");
  const [Lname, SetLname] = useState("");

  const register = (e) => {
    axios
      .post("http://localhost:5000/signup", {
        id_body: uuidv4(),
        created_body: date[0],
        firstname_body: Fname,
        email_body: email,
        lastname_body: Lname,
        phone_body: phone,
        password_body: password,
      })
      .then((results, error) => {
        if (error) console.log(error);
        console.log(results);
      });
  };

  function sendMail(e) {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_aanrjhx",
    //     "template_glxm7pi",
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
      <Stack spacing={3} alignSelf="center" width={formsize}>
        <HStack>
          <Input
            className="signup"
            size="md"
            variant="filled"
            placeholder="First Name"
            type="text"
            name="firstname_body"
            style={{ "margin-left": "0rem" }}
            required
            onChange={(e) => {
              SetFname(e.target.value);
            }}
          />
          <Input
            className="signup"
            size="md"
            variant="filled"
            placeholder="Last Name"
            type="text"
            name="lastname_body"
            required
            onChange={(e) => {
              SetLname(e.target.value);
            }}
          />
        </HStack>
        <Input
          className="signup"
          size="md"
          variant="filled"
          placeholder="Email"
          type="email"
          name="email_body"
          required
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
        />
        <Input
          className="signup"
          size="md"
          variant="filled"
          placeholder="Phone Number"
          type="tel"
          name="phone_body"
          required
          onChange={(e) => {
            SetPhone(e.target.value);
          }}
        />
        <Input
          className="signup"
          size="md"
          variant="filled"
          placeholder="Password"
          type="password"
          required
        />
        <Input
          className="signup"
          size="md"
          variant="filled"
          placeholder="Repeat Password"
          type="password"
          name="password_body"
          required
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
        />
        <Button width="full" onClick={register}>
          SIGN UP
        </Button>
        <Link as={RouterLink} to="/login"></Link>
      </Stack>
    </Stack>
  );
}
