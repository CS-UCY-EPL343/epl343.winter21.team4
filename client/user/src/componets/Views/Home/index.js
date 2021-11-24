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
export default function Home(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();

  return (
    <Stack bgColor="#16DABF" height="100%" width="-webkit-fill-available" alignSelf="center" bgSize="auto">
        <Box
          alignSelf="center"
          bg="#16DABF"
          // width="-webkit-fill-available"
          // h="50%"
          p={3}
          color="white"
          borderRadius="lg"
        // style={{
        //   position: 'absolute', left: '50%', top: '50%',
        //   transform: 'translate(-50%, -50%)'
        // }}
        >
          <Grid
            gap={0}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(1, 1fr)"
          >
            <GridItem rowSpan={1} colSpan={1} w="100%" h="100%">
              {/* <Image boxSize="160px" objectFit="cover" src="https://i.imgur.com/ih8xulQ.png" alt="alt" /> */}
              <Image
                alignSelf="center"
                boxSize="250"
                src="https://i.imgur.com/ToXj5Lk.png"
                borderRadius="15"
                alt="Holding Phone Car Checkmark"
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} w="100%" h="100%">
              <Text fontSize="4xl" textAlign={['right']} >The easiest{<br />} way to {<br />} park</Text>
            </GridItem>

          </Grid>

          <Link as={RouterLink} to="/search">
            <Button colorScheme="teal" variant="outline">
              Get Started
            </Button>
          </Link>
        </Box>
    </Stack>
  );
}
