import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE = {
  items: []
}

const cart: Reducer<ICartState> = (state, action) => {
  console.log(state);
  console.log(action);
  return INITIAL_STATE 
}

export default cart;