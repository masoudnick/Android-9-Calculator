import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../features/calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
export type CalculatorState = ReturnType<typeof store.getState>;
export default store;
