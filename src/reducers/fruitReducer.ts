import { State, Action } from "./types";

export const fruitReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, fruits: action.payload };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "TOGGLE_REMOVE_FRUIT":
      return { ...state, removeFruit: !state.removeFruit };
    case "REMOVE_FRUIT":
      return {
        ...state,
        fruits: state.fruits?.filter((fruit) => fruit.id !== action.payload),
      };
    default:
      throw new Error("Unhandled action type");
  }
};
