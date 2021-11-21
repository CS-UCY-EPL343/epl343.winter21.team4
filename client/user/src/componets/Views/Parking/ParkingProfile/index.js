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
    Image,
    Link,
    List,
    ListIcon,
    ListItem,
  } from "@chakra-ui/react";
  import { FaCar,FaPhoneAlt,FaEnvelope,FaUserEdit,FaPlus, FaDotCircle, FaParking,FaStar, FaCheckCircle} from "react-icons/fa";
  import { HiUserGroup} from "react-icons/hi";
  import {
    BrowserRouter,
    Route,
    Switch,
    Link as RouterLink,
    Pathname,
  } from "react-router-dom";
  import Data from "./../../Search/SearchPage/MOCK_DATA.json"
  export default function ParkingProfile(url) {
    const parkingId = window.location.pathname.split("/").pop();

    {Data.filter((parking) => {
      if (parking.id == parseInt(parkingId)) {
        return parking;
      }else{
        return null;
      }
    }).map((parking, index) => (
      <div key={index}>
     
      </div>
    ))}


    return (
      <Stack width="-webkit-fill-available">
        {Data.filter((parking) => {
      if (parking.id == parseInt(parkingId)) {
        return parking;
      }else{
        return null;
      }
    }).map((parking, index) => (
      <div key={index}>
      <Stack width="-webkit-fill-available">
      <Image alignSelf="center" boxSize="350" src={parking.picture} borderRadius="15" />
      <HStack alignSelf="center">
        <FaParking size="50"/>
        <Heading alignSelf="center">{parking.parkingName}</Heading>
      </HStack>
      <Stack alignSelf="center" alignItems="center">
        <Text color="#7e7e7e">{parking.address} {parking.addressNumber}, {parking.city}, {parking.postCode}</Text>
        <HStack>
          <Text color="#7e7e7e">Price: {parking.price}</Text>
          <HStack paddingLeft="20">
            <FaStar color="#ECC94B"/>
            <Text color="#7e7e7e">{parking.avgRating}({parking.totalRatings})</Text>
          </HStack>
        </HStack>
        <List paddingTop="7" spacing={1} alignItems="center" >
          {parking.features.guard == "true" ?
          <ListItem>
            <ListIcon as={FaDotCircle} color="green.500" />
            Guard on the parking
          </ListItem>
          :""
          }
          {parking.features.asphalt == "true" ?
          <ListItem>
            <ListIcon as={FaDotCircle} color="green.500" />
            Asphalt
          </ListItem>
          :""
          }
          {parking.features.cctv == "true" ?
          <ListItem>
            <ListIcon as={FaDotCircle} color="green.500" />
              CCTV 24h
          </ListItem>
          :""
          }
        </List>
        <Flex paddingTop="150" width="100%">
        <Button bgColor="#16DABF" size="md" width="100%" alignSelf="center" textColor="white" >
            <HStack>
              <FaPlus/>
              <Text >PAY NOW</Text>
            </HStack>
      </Button>
      </Flex>
      </Stack>
      
      
      </Stack>
      </div>
    ))}
    </Stack>
    );
  }
  