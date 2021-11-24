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
import {isMobile} from 'react-device-detect';
import * as rdd from 'react-device-detect';
import logo from "./../../Logos/logo_full.svg"

export default function Home(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();
  let imagesize=0;
  let fontofcaption=0;
    //rdd.isMobile=true;
    if(isMobile){
      imagesize="40"
      fontofcaption="xl"
    }else{
      fontofcaption="4xl"
      imagesize="400"
    }

  return (
    <Stack overflowY="auto" bgColor="#16DABF" height="100%" width="-webkit-fill-available" alignSelf="center" bgSize="auto">
        <Stack
          alignSelf="center"
          bg="#16DABF"
          // width="-webkit-fill-available"
          // h="50%"
          p={3}
          color="white"
          borderRadius="lg"
          width="90%"
        // style={{
        //   position: 'absolute', left: '50%', top: '50%',
        //   transform: 'translate(-50%, -50%)'
        // }}
        >
          
            
              {/* <Image boxSize="160px" objectFit="cover" src="https://i.imgur.com/ih8xulQ.png" alt="alt" /> */}
              <Image
                alignSelf="center"
                // size="400"
                blockSize={imagesize}
                src={logo}
                borderRadius="15"
                alt="Holding Phone Car Checkmark"
              />
            
            
              <Text fontSize={fontofcaption} textAlign="center" fontWeight="bold">
                Search Reserve {<br />}and{<br />} Pay your parking spot {<br />}easily and secure {<br />}using your smartphone
              </Text>
         


          <Link as={RouterLink} to="/search" alignSelf ="center" paddingTop="10">
            <Button colorScheme="blackAlpha" border variant="outline" alignSelf ="center">
              <Text fontSize="4xl" textAlign="center" fontWeight="bold" >Get Started</Text>
            </Button>
          </Link>
        </Stack>
    </Stack>
  );
}
