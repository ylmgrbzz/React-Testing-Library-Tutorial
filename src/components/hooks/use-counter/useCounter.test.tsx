import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the inital count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
});

describe("useCounterIncrement", () => {
  test("should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});

describe("should accept and render the same initial count", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 3,
      },
    });
    expect(result.current.count).toBe(3);
  });
});
