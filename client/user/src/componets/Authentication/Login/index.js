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

export default function LogIn(url) {
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

          <Stack width="52" alignSelf="center">
            <Input variant="filed" placeholder="Email" />

            <Password />

            <Link as={RouterLink} to="/user/home">
              <Button width="full">LOG IN</Button>
            </Link>
          </Stack>
        </Stack>
  );
}
