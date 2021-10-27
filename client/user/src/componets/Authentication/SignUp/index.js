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
        <Text>Craete a new account</Text>
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
      </Stack>
    </Stack>
  );
}
