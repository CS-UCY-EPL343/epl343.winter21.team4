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
import { FaCar,FaCcMastercard,FaPlus,FaCcVisa } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";
import LandingPage from "../../LandingPage";

export default function Card() {
  return (
    <Box alignSelf="center">
        <Stack>
        <Heading paddingTop="10" alignSelf="center">Card Info</Heading>
         <Button size="xl" backgroundColor="gray.300" borderRadius="15">
           <HStack paddingTop="3" paddingBottom="3" paddingLeft="3" paddingRight="3">
            <FaCcMastercard size="50" paddingLeft="5"/>
            <Text >
              **** **** **** 1234
              {<br />}
              Sophoclis Kyriacou
              {<br />}
              Mastercard
            </Text>
           </HStack>
         </Button>
         <Button size="xl" backgroundColor="gray.300" borderRadius="15">
           <HStack paddingTop="3" paddingBottom="3" paddingLeft="3" paddingRight="3">
            <FaCcVisa size="50" paddingLeft="5"/>
            <Text >
              **** **** **** 1234
              {<br />}
              Stylianos Sofokleous
              {<br />}
              Visa
            </Text>
           </HStack>
         </Button>
         <Button backgroundColor="gray.300" borderRadius="15" width="full" textAlign="center">
           <HStack >
            <FaPlus/>
            <Text>
              ADD NEW CARD
            </Text>
           </HStack>
         </Button>
        </Stack>
    </Box>
  );
}
