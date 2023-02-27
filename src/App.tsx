import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { operator, number } from "./features/calculatorSlice";
import { CalculatorState } from "./store";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const currentValue = useSelector(
    (state: CalculatorState) => state.calculator.currentValue
  );
  const totalExpression = useSelector(
    (state: CalculatorState) => state.calculator.totalExpression
  );
  const expressionComplete = useSelector(
    (state: CalculatorState) => state.calculator.expressionComplete
  );
  const result = useSelector(
    (state: CalculatorState) => state.calculator.result
  );

  useEffect(() => {
    const numberButtons = document.querySelectorAll(".number");
    const handleNumbersClick = (e: any) => {
      let value: string = e.target.innerText;
      dispatch(number(value));
    };
    numberButtons.forEach((elm) => {
      elm.addEventListener("click", handleNumbersClick);
    });
    return () => {
      numberButtons.forEach((elm) => {
        elm.removeEventListener("click", handleNumbersClick);
      });
    };
  }, []);
  const handleOperatorClick = (e: any) => {
    let value = e.currentTarget.getAttribute("data-type");
    dispatch(operator({ type: value }));
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">
          {!expressionComplete && (currentValue.length ? currentValue : "0")}
          {expressionComplete && result}
        </div>
        <div className="expression">
          {totalExpression.length ? totalExpression : "0"}
        </div>
      </div>
      <div className="keypad">
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="clear"
        >
          mc
        </button>
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="clear"
        >
          m+
        </button>
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="clear"
        >
          m-
        </button>
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="clear"
        >
          mr
        </button>
        <button
          className="operator clear"
          onClick={handleOperatorClick}
          data-type="clear"
        >
          CE
        </button>
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="division"
        >
          ÷
        </button>
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="multiplication"
        >
          ×
        </button>
        <button
          className="operator backspace"
          onClick={handleOperatorClick}
          data-type="backspace"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="24"
          >
            <path
              d="M512 64H205.3C188.3 64 172 70.75 160 82.75L9.375 233.4c-12.5 12.5-12.5 32.75 0 45.25L160 429.3C172 441.3 188.3 448 205.3 448H512c35.38 0 64-28.62 64-64V128C576 92.63 547.4 64 512 64zM528 384c0 8.822-7.178 16-16 16H205.3c-4.268 0-8.283-1.666-11.31-4.691L54.63 256l139.3-139.3C196.1 113.7 200.1 112 205.3 112H512c8.822 0 16 7.178 16 16V384zM432.1 175c-9.375-9.375-24.56-9.375-33.94 0L352 222.1l-47.03-47.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03L271 303c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L352 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94l-47.03-47.03l47.03-47.03C442.3 199.6 442.3 184.4 432.1 175z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="subtraction"
        >
          −
        </button>
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button
          className="operator"
          onClick={handleOperatorClick}
          data-type="addition"
        >
          +
        </button>
        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button
          className="operator equal"
          onClick={handleOperatorClick}
          data-type="calculate"
        >
          =
        </button>
        <button
          className="number"
          onClick={handleOperatorClick}
          data-type="percent"
        >
          %
        </button>
        <button className="number">0</button>
        <button className="number">.</button>
      </div>
    </div>
  );
}

export default App;
