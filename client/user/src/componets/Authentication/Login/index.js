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
import React from "react";

export default function LogIn() {
  const [value, setValue] = React.useState("");
  function authenticate(value) {
    alert(value);
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
        fontSize="7xl"
        fontWeight="extrabold"
        color="black"
      >
        <Text>ParkPick</Text>
      </Heading>
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
        <Box alignSelf="center">
          <Icon
            alignItems="center"
            as={FaCar}
            boxSize="3xs"
            alignContent="center"
          />
        </Box>

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
        <Stack width="52" alignSelf="center">
          <Input
            variant="filed"
            onChange={(valueString) => setValue(valueString)}
            isRequired={true}
            inputMode="text"
            placeholder="Email"
          />
          <Password />
          <Link as={RouterLink} to="/user/home">
            <Button width="full" onClick={authenticate}>
              LOG IN
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
