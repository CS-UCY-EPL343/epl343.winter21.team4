import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.number);

  creditCard.expirationDate = valid.expirationDate(values.expiration);
  creditCard.cardholderName = valid.cardholderName(values.name);
  creditCard.cvv = valid.cvv(values.cvc);

  console.log(creditCard);

  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured, please try again later";
  errors.cname = false;
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvv = false;

  //Card CVC Error Messages and checks
  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = "Credit Card CVC is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    errors.message = "Credit Card CVC is invalid";
  }

  //Card Expiration Date Error Messages and checks
  if (values.expiration === null || !values.expiration.trim()) {
    errors.message = "Credit Card Expiration Date is not complete";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Credit Card Expiration Date is invalid";
  }

  //Card Number Error Messages and checks
  if (values.number === null || !values.number.trim()) {
    errors.message = "Credit Card Number is not complete";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Credit Card Number is invalid";
  }

  //Card Name Error Messages and checks
  if (values.name === null || !values.name.trim()) {
    errors.message = "Credit Card Name is not complete";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Credit Card Name is invalid";
  }

  if (errors.cname && errors.cnumber && errors.ccvv && errors.cexp) {
    errors.variant = "Success!";
    errors.message = "Credit Card is Valid!";
  }

  return errors;
}
