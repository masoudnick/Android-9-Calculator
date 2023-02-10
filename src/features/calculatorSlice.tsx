import * as actionTypes from "../actions";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  currentValue: string;
  result: number;
  history: [];
  totalExpression: string;
  expressionComplete: Boolean;
}

const initialState: CalculatorState = {
  currentValue: "0",
  result: 0,
  history: [],
  totalExpression: "",
  expressionComplete: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    operator: (state, action: PayloadAction<any>) => {
      state.totalExpression += state.currentValue;
      switch (action.payload.type) {
        case "multiplication":
          state.totalExpression += " * ";
          break;
        case "division":
          state.totalExpression += " / ";
          break;

        case "addition":
          state.totalExpression += " + ";
          break;

        case "subtraction":
          state.totalExpression += " - ";
          break;

        case "calculate":
          state.result = eval(state.totalExpression);
          state.totalExpression += " = ";
          state.expressionComplete = true;
          break;

        case "clear":
          state.currentValue = "0";
          state.totalExpression = "";
          state.expressionComplete = false;
          break;

        default:
          break;
      }
      state.currentValue = "";
    },
    number: (state, action: PayloadAction<string>) => {
      state.currentValue += action.payload;
    },
    // delete(state) {
    //   state.concatNumbers.splice(state.concatNumbers.length - 1);
    // },
  },
});
export const { operator, number } = calculatorSlice.actions;
export default calculatorSlice.reducer;
