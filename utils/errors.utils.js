module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Error - This name is not available";

  if (err.message.includes("email"))
    errors.email = "Error - This email is not available";

  if (err.message.includes("password"))
    errors.password =
      "Error -  This password is to small, the minimum required is 6";

  switch (errors) {
    case err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"):
      errors.email = "Error - This email is allready saved";
    case err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"):
      errors.pseudo = "Error - This name is allready saved";
      break;
  }

  return errors;
};