import valid from "card-validator";

export default function validateInfo(values) {
  let errors = {};

  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured, please try again later";
  errors.cname = false;
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvc = false;

  return errors;
}
