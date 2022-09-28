import { signInWithPopup } from "firebase/auth";
import { auth, google } from "../_config";
import { types_register } from "./types";

const register_user = (name, email, password) => {
  return {
    type: types_register.REGISTER_USER,
    payload: {
      name,
      email,
      password,
    },
  };
};

export const LOGIN_WITH_GOOGLE = () => {
  return (dispatch) => {
    signInWithPopup(auth, google)
      .then(async ({ user }) => {
        dispatch(register_user(user.displayName, user.email));
      })
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          alert("El correo electrónico ya está en uso");
        } else if (
          error.code === "auth/popup-closed-by-user" ||
          error.code === "auth/cancelled-popup-request"
        ) {
          return;
        } else {
          console.warn("No se ha podido registrar el usuario", error);
        }
      });
  };
};
