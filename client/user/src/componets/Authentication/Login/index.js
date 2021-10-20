import { Text, Box, Heading, Button, Stack, Icon, Input, show,handleClick,InputRightElement } from "@chakra-ui/react";
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

   <Input variant="filed"
          placeholder="Email"
      />

      <Input variant="filed"
        type={show ? "text" : "password"}
        placeholder="Enter Password"
      />


<Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button> 
      

<Button>LOG IN</Button>
<Box bgColor="#16DABF" width="full" height="700" minHeight="full"></Box>
    </Stack>
    </Stack>
   
   )
}
