import { CounterAction } from "../actions/action";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    case "increaseBy":
      return {
        previous: state.counter,
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
      };
    default:
      return state;
  }
};
