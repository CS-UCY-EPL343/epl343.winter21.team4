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
import fs from 'fs';
import { Link as RouterLink } from "react-router-dom";
export default function SignUp() {


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

      <Stack spacing={3} alignSelf="center">
        <Input
          size="md"
          variant="filled"
          placeholder="First Name"
          type="text"
        />
        <Input size="md" variant="filled" placeholder="Last Name" type="text" />
        <Input size="md" variant="filled" placeholder="Email" type="email" />
        <Input
          size="md"
          variant="filled"
          placeholder="Phone Number"
          type="tel"
        />
        <Input size="md" variant="filled" placeholder="Password" />
        <Input
          size="md"
          variant="filled"
          placeholder="Repeat Password"
          type="password"
        />
        <Link as={RouterLink} to="/login">
          <Button width="full">SIGN UP</Button>
        </Link>
      </Stack>
    </Stack>
  );
}
