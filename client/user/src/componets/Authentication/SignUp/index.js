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
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import fs from 'fs';
import { Link as RouterLink } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import * as rdd from 'react-device-detect';

export default function SignUp() {

  let formsize=0;
  //rdd.isMobile=true;
  if(isMobile){
    formsize="80%"
  }else{
    formsize="20%"
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
            size="md"
            variant="filled"
            placeholder="First Name"
            type="text"
          />
          <Input size="md" variant="filled" placeholder="Last Name" type="text" />
        </HStack>
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
