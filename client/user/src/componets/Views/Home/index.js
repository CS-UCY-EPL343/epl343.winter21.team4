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
  NumberInput,
  NumberInputField,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
  NavLink,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Data from "./MOCK_DATA.json";
import { Grid, GridItem } from "@chakra-ui/layout";
import { MdOutlineSendToMobile } from "react-icons"
import { isMobile } from 'react-device-detect';
import * as rdd from 'react-device-detect';
import logo from "./../../Logos/logo_full.svg"

export default function Home(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();
  let imagesize = 0;
  let fontofcaption = 0;
  //rdd.isMobile=true;
  if (isMobile) {
    imagesize = "400"
    fontofcaption = "md"
  } else {
    fontofcaption = "4xl"
    imagesize = "400"
  }

  return (
    <Stack p={10} overflowY="auto" height="100%" width="-webkit-fill-available" alignSelf="center" bgSize="auto">
      <Stack
        alignSelf="center"
        bgColor="#22DABF"
        p={10}
        color="white"
        borderRadius="lg"
        width="90%"
      >


        {/* <Image boxSize="160px" objectFit="cover" src="https://i.imgur.com/ih8xulQ.png" alt="alt" /> */}
        <Image
          alignSelf="center"
          blockSize={imagesize}
          src={logo}
          borderRadius="15"
          alt="Holding Phone Car Checkmark"
        />


        <Text fontSize={fontofcaption} textAlign="center" fontWeight="bold">
          Search {<br />}Reserve {<br />}  and {<br />} Pay for your parking spot {<br />}{<br />}Easily and securily {<br />}Using your smartphone
        </Text>



        <Link as={RouterLink} to="/search" alignSelf="center" paddingTop="10">
          <Button colorScheme="blackAlpha" variant="outline">
            <Text fontSize="2xl" textAlign="center" fontWeight="bold" >Get Started</Text>
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
