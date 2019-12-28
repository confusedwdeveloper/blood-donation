// a module from where I can export functions to sign in
import firebase, { auth } from "./firebase.utils";
import validator from "validator";

// set up google sign in for future

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// function to validate signUp form inputs

export const isSignUpInputsValid = data => {
  if (!validator.isEmail(data.email)) {
    return false;
  }
  if (validator.isEmpty(data.firstName)) {
    return false;
  }
  if (validator.isEmpty(data.lastName)) {
    return false;
  }
  if (!validator.isLength(data.password, { min: 6, max: 20 })) {
    return false;
  }
  return true;
};
