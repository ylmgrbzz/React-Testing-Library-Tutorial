import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
  test("should render CounterTwo", () => {
    render(<CounterTwo count={0} />);
    const counterTwo = screen.getByText(/Counter Two/i);
    expect(counterTwo).toBeInTheDocument();
  });
});

test("handlers are called", () => {
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  render(
    <CounterTwo
      count={0}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });
  user.click(incrementButton);
  user.click(decrementButton);
  expect(handleIncrement).toHaveBeenCalledTimes(1);
  expect(handleDecrement).toHaveBeenCalledTimes(1);
});
