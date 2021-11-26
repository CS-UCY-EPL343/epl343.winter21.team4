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
import Password from "../Password";
import { isMobile } from "react-device-detect";
import * as rdd from "react-device-detect";

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
      <form method="GET" action="http://localhost:5000/authUser">
        <Stack width={formsize} alignSelf="center">
          <Input variant="filed" placeholder="Email" name="email_login" />

          <Password />
          <Button width="full" type="submit">
            LOG IN
          </Button>
          {/* <Link as={RouterLink} to="/user/home"></Link> */}
        </Stack>
      </form>
    </Stack>
  );
}
