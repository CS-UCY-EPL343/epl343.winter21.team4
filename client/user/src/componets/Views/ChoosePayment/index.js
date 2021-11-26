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
  } from "@chakra-ui/react";
import { isActiveElement } from "@chakra-ui/utils";
  import { FaCar,FaCcMastercard,FaPlus,FaCcVisa } from "react-icons/fa";
  import {
    BrowserRouter,
    Route,
    Switch,
    Link as RouterLink,
    NavLink,
    useLocation
  } from "react-router-dom";
  
  export default function ChoosePaymentMethod({url}) {
    const { pathname } = useLocation();
    return (
          <Stack width="-webkit-fill-available">
            <Heading paddingTop="10" alignSelf="center">Choose Payment Method</Heading>
            <Stack width="min-content" alignSelf="center" >
            <Button size="xl"  borderRadius="15" backgroundColor="gray.300"> 
              <HStack paddingTop="3" paddingBottom="3" paddingLeft="3" paddingRight="3">
                <FaCcMastercard size="50" paddingLeft="5"/>
                <Text >
                  **** **** **** 1234
                  {<br />}
                  Sophoclis Kyriacou
                  {<br />}
                  Mastercard
                </Text>
              </HStack>
            </Button>
            <Button size="xl" backgroundColor="gray.300" borderRadius="15">
              <HStack paddingTop="3" paddingBottom="3" paddingLeft="3" paddingRight="3">
                <FaCcVisa size="50" paddingLeft="5"/>
                <Text >
                  **** **** **** 1234
                  {<br />}
                  Stylianos Sofokleous
                  {<br />}
                  Visa
                </Text>
              </HStack>
            </Button>
           
            <Flex alignSelf="center" >
            <Link as={RouterLink} to={`${url}/thankyou`} alignSelf="center">
              <Button backgroundColor="gray.300" borderRadius="15" width="full" textAlign="center" bgColor="#16DABF">
                  <Text>
                    PAY NOW 3 euros
                  </Text>
              </Button>
            </Link>
            </Flex>
            </Stack>
          </Stack>
    );
  }
  