import {
  Text,
  Box,
  Heading,
  Button,
  Stack,
  Icon,
  Input,
  Link,
  Image
} from "@chakra-ui/react";
import { FaCar } from "react-icons/fa";
import LogIn from "../Authentication/Login";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
  useLocation
} from "react-router-dom";
import logo from "./../Logos/logo_full.svg"
import {isMobile} from 'react-device-detect';
import * as rdd from 'react-device-detect';

export default function LandingPageLayout({children}) {
  const { pathname } = useLocation();
  let facarsize=0;
    // rdd.isMobile=true;
    if(isMobile){
      facarsize="100"
    }else{
      facarsize="250"
    }
  return (
    <Stack
      direction="column"
      px={{ sm: 4, lg: 8 }}
      minH="full"
      bg="#16DABF"
    >
      <Heading
        mt={6}
        textAlign="center"
        fontSize="7xl"
        fontWeight="extrabold"
        color="black"
      >
        {/* <Text>ParkPick</Text> */}
      </Heading>

      <Image alignSelf="center" width="80%" src={logo} />
      <Box alignSelf="center">
        <FaCar alignItems="center" alignContent="center" size={facarsize} />
      </Box>
      

      {children}
    </Stack>
  );
}
