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
import { FaCar, FaCcMastercard, FaPlus, FaCcVisa } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
  NavLink,
  useLocation,
} from "react-router-dom";
import CardData from "../Card/CardList/MOCK_DATA.json";

export default function ChoosePaymentMethod({ url }) {
  const { pathname } = useLocation();
  return (
    <Stack width="-webkit-fill-available">
      <Stack alignSelf="center">
        <Heading paddingTop="10" alignSelf="center" size="l">
          Choose Payment Method
        </Heading>
        <Stack width="min-content" alignSelf="center">
          {CardData.map((cardDetail, index) => {
            return (
              <Button
                size="xl"
                borderRadius="15"
                // boxShadow="none!important"
                ringColor="#16DABF!important"
                backgroundColor="gray.300"
              >
                <HStack
                  paddingTop="3"
                  paddingBottom="3"
                  paddingLeft="3"
                  paddingRight="3"
                >
                  {cardDetail.type == "Mastercard" ? (
                    <FaCcMastercard size="50" paddingLeft="5" />
                  ) : (
                    <FaCcVisa size="50" paddingLeft="5" />
                  )}
                  <Text>
                    {"**** **** **** "}
                    {cardDetail.last4digits}
                    {<br />}
                    {cardDetail.first_name} {cardDetail.last_name}
                    {<br />}
                    {cardDetail.type}
                  </Text>
                </HStack>
              </Button>
            );
          })}
        </Stack>
        <Stack position="absolute" bottom="0" paddingBottom="2">
          <HStack alignSelf="center">
            <Text color="gray.500" textAlign="left">
              Kokos Parking
            </Text>
            <Text color="gray.500" paddingLeft="70">
              €3.00
            </Text>
          </HStack>
          <hr style={{ backgroundColor: "black", height: "2px" }} />
          <HStack alignSelf="center">
            <Text color="black" size="lg" textAlign="left" fontWeight="bold">
              TOTAL DUE:
            </Text>
            <Text color="black" paddingLeft="75" size="lg" fontWeight="bold">
              €3.00
            </Text>
          </HStack>

          <Link as={RouterLink} to="/thankyou" alignSelf="center" width="100%">
            <Button
              size="lg"
              backgroundColor="gray.300"
              borderRadius="15"
              width="100%"
              textAlign="center"
              bgColor="#16DABF"
            >
              <Text fontWeight="bold">PAY €3.00</Text>
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
