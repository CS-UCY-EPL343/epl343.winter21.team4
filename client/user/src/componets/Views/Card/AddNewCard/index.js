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
    FormLabel,
    Textarea

  } from "@chakra-ui/react";
  import { FaCar,FaCcMastercard,FaPlus,FaCcVisa } from "react-icons/fa";
  import {
    BrowserRouter,
    Route,
    Switch,
    Link as RouterLink,
    NavLink,
  } from "react-router-dom";
  
  export default function AddNewCard({url}) {
    return (
          <Stack width="-webkit-fill-available">
          <Heading paddingTop="10" alignSelf="center">Card Details</Heading>
          <Stack width="250px" alignSelf="center">
          <form paddingTop="10" alignSelf="center" >
        <FormLabel>Card 16-digit Number</FormLabel>
        <Input
          focusBorderColor="#16DABF"
          color="#c1c1c1"
          type="text"
          backgroundColor="gray.200"
          textColor="black"
          name="name"
        />
        <FormLabel>Card Holders Name</FormLabel>
        <Input
          focusBorderColor="#16DABF"
          color="#c1c1c1"
          type="text"
          backgroundColor="gray.200"
          textColor="black"
          name="phone"
        />
        <FormLabel>CVV</FormLabel>
        <Input
          focusBorderColor="#16DABF"
          color="#c1c1c1"
          type="int"
          backgroundColor="gray.200"
          textColor="black"
          name="email"
        />
        <FormLabel>Expiration Date</FormLabel>
        <Input
          focusBorderColor="#16DABF"
          color="#c1c1c1"
          type="date"
          backgroundColor="gray.200"
          textColor="black"
          name="email"
        />
        <Stack paddingTop="10" alignSelf="center" alignContent="center">
        <Button as={RouterLink} to="/card" backgroundColor="gray.300" borderRadius="15" width="full" textAlign="center">
              <HStack >
                <FaPlus/>
                <Text>
                  ADD CARD
                </Text>
              </HStack>
            </Button>
        </Stack>
      </form>
            
          </Stack>
          </Stack>
    );
  }
  