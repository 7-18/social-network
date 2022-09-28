import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { register_reducer } from "./register.reducer";

const reducers = combineReducers({
  register: register_reducer,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
