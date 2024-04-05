import { useState } from "react";
import { UseCounterProps } from "./userCounterTypes";

export const useCounter = (
  { initialCount = 0 }: UseCounterProps = {
    reset: () => {},
  }
) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialCount);

  return { count, increment, decrement, reset };
};
