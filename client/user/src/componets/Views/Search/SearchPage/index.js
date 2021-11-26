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
import {FaHashtag} from "react-icons/fa"
export default function Search(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();

  return (
    <Stack width="-webkit-fill-available" align="center">
      <Heading paddingTop="10" alignSelf="center" alignItems="center">
        Search For Parking
      </Heading>
      <Stack paddingTop="5">
        <Stack alignContent="center">
          <NumberInput
            width="60%"
            flexGrow={0}
            flexShrink={0}
            onChange={(valueString) => setValue(valueString)}
            value={value}
            max={9999}
            clampValueOnBlur={false}
            isRequired={true}
            inputMode="numeric"
            onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}
            alignSelf="center"
            
          >
            <NumberInputField
              backgroundColor="#11DABF"
              textAlign="center"
              placeholder="#"
              maxLength="4"
              id="searchBox"
              name="box"
              textColor="blacks"
              fontWeight="extrabold"
            ></NumberInputField>
          </NumberInput>
          <Flex h="100vh">
          <Stack overflowY="auto" flexShrink={0} flex={1} paddingBottom="5" height="75%">
            {Data.filter((parking) => {
              if (value === "") {
                return null;
              } else if (parking.id.match(value)) {
                return parking;
              }
            }).map((parking, index) => (
              <div key={index}>
                <Link as={NavLink} to={`${pathname}/${parking.id}`}>
                  <HStack padding="5">
                    <Image src={parking.picture} borderRadius="15" width="150px"/>
                    <Stack>
                      <Text textAlign="right" fontWeight="bold">#{parking.id}</Text>
                      <Text alignSelf="baseline" fontSize="xl" color="green">
                        {parking.parkingName}
                        {<br />}
                        {parking.address} {parking.addressNumber}
                        {<br />}
                        {parking.city}, {parking.postCode}
                        {<br />}
                      </Text>
                      <Text align="right" fontWeight="extrabold" color="darkblue">Price: €{parking.price}</Text>
                    </Stack>
                  </HStack>
                </Link>
              </div>
            ))}
          </Stack>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
