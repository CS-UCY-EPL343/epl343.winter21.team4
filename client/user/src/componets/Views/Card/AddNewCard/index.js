import Cards from "react-credit-cards";
import useForn from "useForm";
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
import { Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCar, FaCcMastercard, FaPlus, FaCcVisa } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link as RouterLink,
  NavLink,
} from "react-router-dom";
import "react-credit-cards/es/styles-compiled.css";
import React, { useState } from "react";

export default function AddNewCard({ url }) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <Stack width="-webkit-fill-available">
      <Heading paddingTop="10" alignSelf="center">
        Add A New Card
      </Heading>
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <Row>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </Row>
        </form>
      </div>
      <Stack width="min-content" alignSelf="center"></Stack>
    </Stack>
  );
}
