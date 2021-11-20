import * as React from "react";
import {
  Flex,
  Stack,
  Link,
  Box,
  useTheme,
  Text,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import {
  HiOutlineDocument,
  HiOutlineDocumentText,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import { FaSearch,FaHome } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaCar, FaInfoCircle } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

export default function Layout({children}) {
  return (
    <Flex h="100vh" overflow="hidden">
      <Flex flexShrink={0}>
        <Stack w={{ base: 16, lg: 64 }}>
          <Stack flex={1} h={0} bg="#16DABF" spacing={0}>
            <Flex
              h={16}
              align="center"
              justify="center"
              flexShrink={0}
              px={4}
              display={{ base: "none", lg: "flex" }}
            >
              <Icon
                as={FaCar}
                width="30"
                height="30"
                color="white"
                size="5xl"
              />
            </Flex>
            <Stack flex={1} overflowY="auto">
              <Stack as="nav" flex={1} spacing={0}>
              <Link
                  as={RouterLink}
                  to="/home"
                  style={{ textDecoration: "none" }}
                >
                  <HStack
                    align="center"
                    px={4}
                    py={3}
                    fontWeight="medium"
                    fontSize="sm"
                    textColor="red"
                    lineHeight={5}
                    spacing={2}
                    activeStyle={{
                      color: "gray.300",
                    }}
                    _hover={{ bg: "gray.300" }}
                  >
                    <Icon
                      as={FaHome}
                      w={{ base: 8, lg: 6 }}
                      h={{ base: 8, lg: 6 }}
                      color="white"
                    />
                    <Text display={{ base: "none", lg: "block" }} color="white">
                      {"Home"}
                    </Text>
                  </HStack>
                </Link>

                <Link
                  as={RouterLink}
                  to="/search"
                  style={{ textDecoration: "none" }}
                >
                  <HStack
                    align="center"
                    px={4}
                    py={3}
                    fontWeight="medium"
                    fontSize="sm"
                    textColor="red"
                    lineHeight={5}
                    spacing={2}
                    activeStyle={{
                      color: "gray.300",
                    }}
                    _hover={{ bg: "gray.300" }}
                  >
                    <Icon
                      as={FaSearch}
                      w={{ base: 8, lg: 6 }}
                      h={{ base: 8, lg: 6 }}
                      color="white"
                    />
                    <Text display={{ base: "none", lg: "block" }} color="white">
                      {"Search"}
                    </Text>
                  </HStack>
                </Link>

                <Link
                  as={RouterLink}
                  to="/card"
                  style={{ textDecoration: "none" }}
                >
                  <HStack
                    align="center"
                    px={4}
                    py={3}
                    fontWeight="medium"
                    fontSize="sm"
                    textColor="red"
                    lineHeight={5}
                    spacing={2}
                    activeStyle={{
                      color: "gray.300",
                    }}
                    _hover={{ bg: "gray.300" }}
                  >
                    <Icon
                      as={BsFillCreditCardFill}
                      w={{ base: 8, lg: 6 }}
                      h={{ base: 8, lg: 6 }}
                      color="white"
                    />
                    <Text display={{ base: "none", lg: "block" }} color="white">
                      {"Card"}
                    </Text>
                  </HStack>
                </Link>

                <Link
                  as={RouterLink}
                  to="/profile"
                  style={{ textDecoration: "none" }}
                >
                  <HStack
                    align="center"
                    px={4}
                    py={3}
                    fontWeight="medium"
                    fontSize="sm"
                    textColor="red"
                    lineHeight={5}
                    spacing={2}
                    activeStyle={{
                      color: "gray.300",
                    }}
                    _hover={{ bg: "gray.300" }}
                  >
                    <Icon
                      as={FaUserCog}
                      w={{ base: 8, lg: 6 }}
                      h={{ base: 8, lg: 6 }}
                      color="white"
                    />
                    <Text display={{ base: "none", lg: "block" }} color="white">
                      {"Profile"}
                    </Text>
                  </HStack>
                </Link>
              </Stack>
            </Stack>

            <Link as={RouterLink} to="/info" style={{ textDecoration: "none" }}>
              <HStack
                align="center"
                px={4}
                py={3}
                fontWeight="medium"
                fontSize="sm"
                textColor="red"
                lineHeight={5}
                spacing={2}
                activeStyle={{
                  color: "gray.300",
                }}
                _hover={{ bg: "gray.300" }}
              >
                <Icon
                  as={FaInfoCircle}
                  w={{ base: 8, lg: 6 }}
                  h={{ base: 8, lg: 6 }}
                  color="white"
                />
                <Text display={{ base: "none", lg: "block" }} color="white">
                  {"Info"}
                </Text>
              </HStack>
            </Link>

            <Link
              as={RouterLink}
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <HStack
                align="center"
                px={4}
                py={3}
                fontWeight="medium"
                fontSize="sm"
                textColor="red"
                lineHeight={5}
                spacing={2}
                activeStyle={{
                  color: "gray.300",
                }}
                _hover={{ bg: "gray.300" }}
              >
                <Icon
                  as={MdOutlineLogout}
                  w={{ base: 8, lg: 6 }}
                  h={{ base: 8, lg: 6 }}
                  color="white"
                />

                <Text display={{ base: "none", lg: "block" }} color="white">
                  Log Out
                </Text>
              </HStack>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      {children}
    </Flex>
  );
}
