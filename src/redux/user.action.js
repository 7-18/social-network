import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, google } from "../_config";
import { types_login, types_register } from "./types";

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

export const REGISTER_USER_WITH_EMAIL = (name, email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MDA4MjAyMDA5NzgxNTIx/brock-lesnar-retires-ufcjpg.jpg",
        });
        dispatch(register_user(name, email, password));
      })
      .catch((error) => {
        console.warn("Failed to register user, please try again", error);
      });
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
          alert("Email is already in use");
        } else if (
          error.code === "auth/popup-closed-by-user" ||
          error.code === "auth/cancelled-popup-request"
        ) {
          return;
        } else {
          console.warn("Failed to register user", error);
        }
      });
  };
};

const login_user = (email, password) => ({
  type: types_login.LOGIN_USER,
  payload: {
    email,
    password,
  },
});

export const LOGIN_USER_WITH_EMAIL = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(login_user(email, password));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logout_user = () => {
  return {
    type: types_login.LOGOUT,
  };
};

export const LOGOUT_USER_FIREBASE = () => {
  return (dispatch) => {
    signOut(auth)
      .then(({ user }) => {
        dispatch(logout_user());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
