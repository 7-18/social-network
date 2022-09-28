import { types_register } from "./types";
import { types_login } from "./types";

export const register_reducer = (state = {}, action) => {
  switch (action.type) {
    case types_register.REGISTER_USER:
      return {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };

    default:
      return state;
  }
};

export const login_reducer = (state = {}, action) => {
  switch (action.type) {
    case types_login.LOGIN_USER:
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    case types_login.LOGOUT:
      return {};
    default:
      return state;
  }
};
