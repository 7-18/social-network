import { types_register } from "./types";

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
