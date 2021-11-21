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
import {MdOutlineSendToMobile} from "react-icons"
export default function Home(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();

  return (
    <Stack width="-webkit-fill-available" align="center">
      <Heading paddingTop="10" alignSelf="center" alignItems="center">
        <Box
          bg="#16DABF"
          //w="60%"
          //h="40%"
          p={3}
          color="white"
          borderRadius="lg"
          style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Grid
            gap={0}
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
          >
            <GridItem rowSpan={1} colSpan={1} w="100%" h="100%">
              <Text fontSize="2xl" textAlign={['left']} >The easiest{<br/>} way {<br/>}to park</Text>
            </GridItem>
            <GridItem rowSpan={5} colSpan={1} w="100%" h="100%">
              <Image boxSize="160px" objectFit="cover" src="https://i.imgur.com/ih8xulQ.png" alt="alt" /> 
            </GridItem>
          </Grid>
          
          <Link as={RouterLink} to="/search">
            <Button colorScheme="teal" variant="outline">
              Get Started
            </Button>
          </Link>
        </Box>
      </Heading>
      <Stack paddingTop="5"></Stack>
    </Stack>
  );
}
