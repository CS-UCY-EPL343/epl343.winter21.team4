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
import { FaCar } from "react-icons/fa";
import React from "react";
import ReactDOM from "react-dom";
import ReactSearchBox from "react-search-box";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
} from "react-router-dom";
import LandingPage from "../../LandingPage";
import { useState } from "react";
import Data from "./MOCK_DATA.json";

export default function Search() {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");

  return (
    <Box alignSelf="center">
      <Link as={RouterLink} to="/profile">
        <Button width="full">GO TO PROFILE</Button>
      </Link>

      <Stack>
        <Box boxSize="xl">
          <NumberInput
            onChange={(valueString) => setValue(valueString)}
            value={value}
            max={9999}
            clampValueOnBlur={false}
            isRequired={true}
            inputMode="numeric"
            onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
          >
            <NumberInputField
              placeholder="#"
              maxLength="4"
              id="searchBox"
              name="box"
            ></NumberInputField>
          </NumberInput>


          {Data.filter((parking) => {
            if (value === "") {
              return null;
            } else if (parking.id == value) {
              return parking;
            }
          }).map((parking, index) => (
            <div key={index}>
              <HStack paddingTop="5" >
                <Image src={parking.picture} borderRadius="15" />
                <Stack >
                  <Text alignSelf="baseline">
                    {parking.parkingName}
                    {<br />}
                    {parking.address} {parking.addressNumber}
                    {<br />}
                    {parking.city}, {parking.postCode}
                    {<br />}
                  </Text>
                  <Text align="right">Price: €{parking.price}</Text>
                </Stack>
              </HStack>
            </div>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
