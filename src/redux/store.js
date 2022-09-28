import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { login_reducer, register_reducer } from "./user.reducer";

const reducers = combineReducers({
  register: register_reducer,
  login: login_reducer,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
