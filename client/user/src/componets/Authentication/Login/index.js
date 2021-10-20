import { Text, Box, Heading, Button, Stack, Icon } from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
export default function LogIn() {
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
<Input  pr="4.5rem" variant="filled" placeholder="Email"></Input>

      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
 


<Button>LOG IN</Button>

    </Stack>
    </Stack>
   
   )
}
