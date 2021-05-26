export function validEmail(email) {
  const errors = {};

  const regexEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/, "i");

  if (!email) {
    errors.email = "Required";
  } else if (!regexEmail.test(email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

export function validTel(tel) {
  const errors = {};

  const regexTel = new RegExp(
    /^((8|\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    "i"
  );

  if (!tel) {
    errors.tel = "Required";
  } else if (!regexTel.test(tel)) {
    errors.tel = "Invalid phone";
  }

  return errors;
}

export function validName(name) {
  const errors = {};
  if (!name) {
    errors.name = "Required";
  }
  return errors;
}

export function validPassword(password) {
  const errors = {};
  if (password.length < 5) {
    errors.password = "Password must be at least 5 characters";
  }
  return errors;
}
