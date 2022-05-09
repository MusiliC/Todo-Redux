import { actionTypes } from "../constants/action-types";

const initialState = {
  todos: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS:
      return { ...state, todos: action.payload };

    case actionTypes.CREATE_TASK:
      return [...state, action.payload];

    case actionTypes.SELECT_TASK:
      return { ...state, todos: action.payload[0] };

    case actionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case actionTypes.UPDATE_TASK:
      console.log(action.payload);
      return state.map((task) => task.id === action.payload.id ? action.payload : state)

    default:
      return state;
  }
};
