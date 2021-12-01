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
  import {AiOutlineLike} from "react-icons/ai";
  import {isMobile} from 'react-device-detect';
  import * as rdd from 'react-device-detect';
  
  export default function Search(url) {
    const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
    const [value, setValue] = React.useState("");
    const { pathname } = useLocation();
  
    let parkingdescriptionsize=0;
    rdd.isMobile=true;
    if(isMobile){
      parkingdescriptionsize="md"
    }else{
      parkingdescriptionsize="xl"
    }
  
    return (
      <Stack width="-webkit-fill-available" align="center" alignContent ="center">
        <Heading paddingTop="10" paddingBottom="20" alignSelf="center" alignItems="center" >
            THANK YOU FOR YOUR PAYMENT!
        </Heading>
        <AiOutlineLike size="150" color="#16dabf"/>
        <Link
            as={RouterLink}
            to="/home"
            alignSelf="center"
            width="250px"
            position="absolute"
            bottom="0"
            p={2}
          >
            <Button
              size="lg"
              backgroundColor="gray.300"
              borderRadius="15"
              width="100%"
              textAlign="center"
              bgColor="#16DABF"
            >
              <Text>RETURN TO HOME</Text>
            </Button>
          </Link>
        
      </Stack>
    );
  }
  