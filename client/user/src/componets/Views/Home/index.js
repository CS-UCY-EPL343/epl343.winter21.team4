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

        {/* <Box bg="#16DABF" w="100%" p={4} color="white" borderRadius="md">
          <Grid templateColumns="repeat(5, 1fr)" gap={10}>
            <Box w="40%" p={4} borderRadius="md" fontSize="2xl">
              The easiest way to park.
            </Box>
          </Grid>
        </Box> */}

        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </Heading>
      <Stack paddingTop="5"></Stack>
    </Stack>
  );
}
