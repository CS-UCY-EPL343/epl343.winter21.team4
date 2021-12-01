import {
  Text,
  Button,
  Stack,
  Link,
  Image,
} from "@chakra-ui/react";
import React from "react";
import {
  Link as RouterLink,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import * as rdd from 'react-device-detect';
import logo from "./../../Logos/logo_full.svg"

export default function Home(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();
  let imagesize = 0;
  let fontofcaption = 0;
  let padding = 0;
  let h = 0;
  rdd.isMobile = false;
  if (isMobile) {
    padding = "5"
    imagesize = "200"
    fontofcaption = "2xl"
  } else {
    fontofcaption = "3xl"
    imagesize = "270"
    padding = "10"
  }


  return (
    <Stack p={padding} overflowY="auto" height="100%" width="-webkit-fill-available" alignSelf="center" bgSize="auto">
      <Stack
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        alignSelf="center"
        bgColor="#22DABF"
        p={5}
        color="white"
        borderRadius="lg"
        width="100%"
        height={h}

      >
        {/* Browser */}

        <Image
          alignSelf="center"
          blockSize={imagesize}
          src={logo}
          borderRadius="15"
          alt="Holding Phone Car Checkmark"
        />
        <Text fontSize={fontofcaption} textAlign="center" fontWeight="bold">
          Search, Reserve  and  Pay for your parking spot {<br />}easily and securily using your smartphone
        </Text>



        <Link as={RouterLink} to="/search" alignSelf="center" paddingTop="10">
          <Button colorScheme="blackAlpha" variant="solid">
            <Text fontSize={fontofcaption} textAlign="center" fontWeight="bold" >Get Started</Text>
          </Button>
        </Link>

      </Stack>
    </Stack>
  );
}
