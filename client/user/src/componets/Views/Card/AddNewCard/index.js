/*import Cards from "react-credit-cards";
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
//import "bootstrap/dist/css/bootstrap.min.css";
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
}*/

import React from "react";
import useForm from "./useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Expiration Date"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.cexp}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="CVC"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      isValid={errors.ccvc}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                size={"block"}
                data-testid="validateButton"
                id="validateButton"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
