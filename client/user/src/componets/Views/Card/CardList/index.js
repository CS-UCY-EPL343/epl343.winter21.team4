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
import { FaCar, FaCcMastercard, FaPlus, FaCcVisa } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
  NavLink,
} from "react-router-dom";
import CardData from "./MOCK_DATA.json";

export default function CardList({ url }) {
  return (
    <Stack width="-webkit-fill-available">
      <Heading paddingTop="10" alignSelf="center">
        Card Info
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
        <Link as={NavLink} to={`${url}/addnewcard`}>
          <Button
            backgroundColor="gray.300"
            borderRadius="15"
            width="full"
            textAlign="center"
          >
            <HStack>
              <FaPlus />
              <Text>ADD NEW CARD</Text>
            </HStack>
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
