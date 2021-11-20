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

export default function Search(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const {pathname}=useLocation();

  return (
    <Stack width="-webkit-fill-available" align="center">
      <Heading paddingTop="10" alignSelf="center" alignItems="center">Search For Parking</Heading>
      <Stack paddingTop="5">
        <Stack >
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
              <Link as={NavLink} to={`${pathname}/${parking.id}`}>
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
              </Link>
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}