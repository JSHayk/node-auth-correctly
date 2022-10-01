// Auth.
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const userNameValidation = /^[A-Za-z0-9_-]{4,16}$/;
const hexValidation = /[0-9A-Fa-f]{6}/g;

// Validation Checking.
const isEmailValidated = (email) => {
  return email.match(emailValidation);
};

const isPasswordValidated = (password) => {
  return password.match(passwordValidation);
};

const isUserNameValidated = (name) => {
  return name.match(userNameValidation);
};

const isHexValidated = (hexId) => {
  return hexId.match(hexValidation);
};

export default {
  isEmailValidated,
  isHexValidated,
  isPasswordValidated,
  isUserNameValidated,
  emailValidation,
  passwordValidation,
  userNameValidation,
  hexValidation,
};
