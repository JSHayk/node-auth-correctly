import {
  emailValidation,
  nameValidation,
  passwordValidation,
  hexValidation,
} from "../validations/UserValidation.js";

export const controlEmailValidation = (email) => {
  return email.match(emailValidation);
};

export const controlPasswordValidation = (password) => {
  return password.match(passwordValidation);
};

export const controlUserNameValidation = (name) => {
  return name.match(nameValidation);
};

export const controlHexValidation = (hexId) => {
  return hexId.match(hexValidation);
};
