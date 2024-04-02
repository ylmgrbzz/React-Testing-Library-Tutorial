import { render, screen, logRoles } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("should render the counter", () => {
    render(<Counter />);
    const countElement = screen.getByText(/0/);
    expect(countElement).toBeInTheDocument();

    const element = screen.getByText("Increment");
    expect(element).toBeInTheDocument();

    const decrementElement = screen.getByText("Decrement");
    expect(decrementElement).toBeInTheDocument();

    const element1 = screen.getByRole("button", { name: "Increment" });
    expect(element1).toBeInTheDocument();

    const element2 = screen.getByRole("button", { name: "Decrement" });
    expect(element2).toBeInTheDocument();

    const element3 = screen.getByRole("heading", { name: "Count: 0" });
    expect(element3).toBeInTheDocument();

    const counter = screen.getByTestId("custom-element");
    expect(counter).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render a count of 1 after inc button", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("render a count of 2 after inc button twice", async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
  });
});
