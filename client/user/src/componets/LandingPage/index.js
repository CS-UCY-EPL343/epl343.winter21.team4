import {
  Text,
  Box,
  Heading,
  Button,
  Stack,
  Icon,
  Input,
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import { Switch, Link, Route } from "react-router-dom";


export default function LandingPage() {
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
      <Box alignSelf="center">
        <Icon
          alignItems="center"
          as={FaCar}
          boxSize="3xs"
          alignContent="center"
        />
      </Box>
      <Stack width="52" alignSelf="center">
        {/* <Button color='blue.100' >landing page </Button> */}
        <Link to="/Signup">Test</Link>

        <Button>LOG IN </Button>
        <Button>SIGN UP </Button>
        <Button>ONE TIME PAYMENT </Button>
      </Stack>
      /* by inceasing the size of a box, the outer stack gets bigger and covers
      the screen */
      <Box bgColor="#16DABF" width="full" height="700" minHeight="full"></Box>
    </Stack>
  );
}
