// import { useReducer } from "react";
import Counter from "./components/Counter";
import { CounterProvider } from "./context/ConterContext";

// POINT useContext x useReducer
const Example = () => {

  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Example;
