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
  Image
} from "@chakra-ui/react";
import { FaCar,FaPhoneAlt,FaEnvelope,FaUserEdit,FaPlus, FaBook } from "react-icons/fa";
import { HiUserGroup} from "react-icons/hi";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";

export default function Profile() {
  return (
    <Stack width="-webkit-fill-available">
      <Heading paddingTop="10" alignSelf="center">My Profile</Heading>
      <Text align="center" fontSize="37" color="#7e7e7e">Sophoclis Kyriacou</Text>
      <Stack alignSelf="center">
        <Stack paddingLeft="5" textColor="#c1c1c1">
          <HStack>
            <FaPhoneAlt/>
            <Text >+35799299611</Text>
          </HStack>
          <HStack>
            <FaEnvelope/>
            <Text >skyria10@ucy.ac.cy</Text>
          </HStack>
          <HStack>
            <FaUserEdit/>
            <Text >Edit</Text>
          </HStack>
        </Stack>
        <HStack paddingTop="10" paddingBottom="10" textColor="white">
          <Button bgColor="#16DABF" size="md"> 
            <Text>Balance: 13.00</Text>
          </Button>
          <Button bgColor="#16DABF" size="md">
            <HStack>
              <FaPlus/>
              <Text>ADD MONEY</Text>
            </HStack>
          </Button>
        </HStack>
        <Stack textColor="#c1c1c1">
          <HStack>
            <FaBook/>
            <Text>Transaction History</Text>
          </HStack>
          <HStack>
            <HiUserGroup/>
            <Text>Tell your friends</Text>
          </HStack>
        </Stack>
      </Stack>
      
    </Stack>
  );
}
