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
  useLocation
} from "react-router-dom";

export default function LandingPageLayout({children}) {
  const { pathname } = useLocation();
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
      <Box alignSelf="center">
        <Icon
          alignItems="center"
          as={FaCar}
          boxSize="3xs"
          alignContent="center"
        />
      </Box>

      {children}
      <Box bgColor="#16DABF" width="full" height="700" minHeight="full"></Box>
    </Stack>
  );
}
