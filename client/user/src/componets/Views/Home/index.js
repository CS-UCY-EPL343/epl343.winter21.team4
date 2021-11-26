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
import logo from "./../../Logos/logo_full.svg"

export default function Home(url) {
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);
  const [value, setValue] = React.useState("");
  const { pathname } = useLocation();
  let imagesize = 0;
  let fontofcaption = 0;
  //rdd.isMobile=false;
  // if (isMobile) {
  //   imagesize = "30"
  //   fontofcaption = "md"
  // } else {
  //   fontofcaption = "2xl"
  //   imagesize = "300"
  // }

  return (
    <Stack p={10} overflowY="auto" height="100%" width="-webkit-fill-available" alignSelf="center" bgSize="auto">
      <Stack
        alignSelf="center"
        bgColor="#22DABF"
        p={10}
        color="white"
        borderRadius="lg"
        width="90%"
      >
        {/* Browser */}
        <BrowserView>
          <Image
            alignSelf="center"
            blockSize={"300"}
            src={logo}
            borderRadius="15"
            alt="Holding Phone Car Checkmark"
          />
          <Text fontSize={"2xl"} textAlign="center" fontWeight="bold">
            Search {<br />}Reserve {<br />}  and {<br />} Pay for your parking spot {<br />}{<br />}Easily and securily {<br />}Using your smartphone
          </Text>
        </BrowserView>

        {/* Mobile */}
        <MobileView>
          <Image
            alignSelf="center"
            blockSize={"100"}
            src={logo}
            borderRadius="15"
            alt="Holding Phone Car Checkmark"
          />

          <Text fontSize={"xl"} textAlign="center" fontWeight="bold">
            Search {<br />}Reserve {<br />}  and {<br />} Pay for your parking spot {<br />}{<br />}Easily and securily {<br />}Using your smartphone
          </Text>
        </MobileView>

        <Link as={RouterLink} to="/search" alignSelf="center" paddingTop="10">
          <Button colorScheme="blackAlpha" variant="outline">
            <Text fontSize="2xl" textAlign="center" fontWeight="bold" >Get Started</Text>
          </Button>
        </Link>

      </Stack>
    </Stack>
  );
}
