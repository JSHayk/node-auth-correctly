// Autherization.
export const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
export const nameValidation = /^[A-Za-z0-9_-]{4,16}$/;
// Acccount.
export const hexValidation = /[0-9A-Fa-f]{6}/g; 