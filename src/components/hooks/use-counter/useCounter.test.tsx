import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the inital count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
});
