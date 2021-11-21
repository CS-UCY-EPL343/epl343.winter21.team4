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

export default function Home(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();

  return (
    <Stack width="-webkit-fill-available" align="center">
      <Heading paddingTop="10" alignSelf="center" alignItems="center">
        {/* <Box bg="#16DABF" w="100%" p={4} color="white" borderRadius="md">
          <Box w="40%" p={4} borderRadius="md" fontSize="7xl">
            The easiest way to park.
          </Box>
          <Box>aaa</Box>
        </Box> */}

        <Box
          bg="#16DABF"
          w="100%"
          p={4}
          color="white"
          borderRadius="md"
          h="500"
        >
          <Grid
            gap={1}
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
          >
            <GridItem rowSpan={1} colSpan={1} w="200px" fontSize="6xl" p={1}>
              The easiest way to park.
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} w="300px" fontSize="6xl" p={1}>
              <Box boxSize="sm">
                <Image src="https://i.imgur.com/ih8xulQ.png" alt="alt" />
              </Box>
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
