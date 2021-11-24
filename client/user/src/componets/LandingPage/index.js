import {
  Text,
  Box,
  Heading,
  Button,
  Stack,
  Icon,
  Input,
  Link,
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import LogIn from "../Authentication/Login";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";

export default function LandingPage() {
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
        <Text>ParkPick2222</Text>
      </Heading>
      <Box alignSelf="center">
        <Icon
          alignItems="center"
          as={FaCar}
          boxSize="3xs"
          alignContent="center"
        />
      </Box>
      <Stack width="52" alignSelf="center">
        <Link as={RouterLink} to="/login">
          <Button width="full">LOG IN</Button>
        </Link>

        <Link as={RouterLink} to="/signup">
          <Button width="full">SIGN UP </Button>
        </Link>
        <Button width="full">ONE TIME PAYMENT </Button>
      </Stack>
      /* by inceasing the size of a box, the outer stack gets bigger and covers
      the screen */
      <Box bgColor="#16DABF" width="full" height="700" minHeight="full"></Box>
    </Stack>
  );
}
