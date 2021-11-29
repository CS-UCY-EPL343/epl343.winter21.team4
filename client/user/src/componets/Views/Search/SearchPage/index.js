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
import { AiOutlineLine } from "react-icons/ai";
import { isMobile } from "react-device-detect";
import * as rdd from "react-device-detect";
import { FaHashtag } from "react-icons/fa";


export default function Search(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();

  let parkingdescriptionsize = 0;
  //rdd.isMobile=true;
  if (isMobile) {
    parkingdescriptionsize = "md";
  } else {
    parkingdescriptionsize = "xl";
  }

  return (
    <Stack width="-webkit-fill-available" align="center">
      <Heading paddingTop="10" alignSelf="center" alignItems="center">
        Search For Parking
      </Heading>
      <Stack paddingTop="5">
        <Stack alignContent="center">
          <NumberInput
            width="125px"
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
            focusBorderColor="#16DABF"
          >
            <NumberInputField
              width="125px"
              backgroundColor="gray.300"
              textAlign="left"
              placeholder="Parking #"
              maxLength="4"
              id="searchBox"
              name="box"
              textColor="black"
              fontWeight="extrabold"
            ></NumberInputField>
          </NumberInput>
          <Flex h="100vh">
            <Stack
              overflowY="auto"
              flexShrink={0}
              flex={1}
              paddingBottom="5"
              height="75%"
            >
              {Data.filter((parking) => {
                if (value === "") {
                  return null;
                } else if (parking.id.match(value)) {
                  return parking;
                }
              }).map((parking, index) => (
                <div key={index}>
                  <Box backgroundColor="gray.200" borderRadius="15">
                    <Link as={NavLink} to={`${pathname}/${parking.id}`}>
                      <HStack padding="1">
                        <Image
                          src={parking.picture}
                          borderRadius="15"
                          width="150px"
                        />
                        <Stack>
                          <Text
                            textAlign="right"
                            fontWeight="extrabold"
                            color="#DA1631"
                          >
                            #{parking.id}
                          </Text>
                          <Text
                            alignSelf="baseline"
                            fontSize={parkingdescriptionsize}
                            color="gray.600"
                          >
                            {parking.parkingName}
                            {<br />}
                            {parking.address} {parking.addressNumber}
                            {<br />}
                            {parking.city}, {parking.postCode}
                            {<br />}
                          </Text>
                          <Text
                            align="right"
                            fontWeight="bold"
                            color="black"
                            fontStyle="oblique"
                          >
                            Price: €{parking.price}
                          </Text>
                        </Stack>
                      </HStack>
                    </Link>
                  </Box>
                </div>
              ))}
            </Stack>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}
