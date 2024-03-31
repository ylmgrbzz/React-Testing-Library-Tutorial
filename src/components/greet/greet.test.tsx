import React from "react";
import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("greet", () => {
  render(<Greet />);
  const linkElement = screen.getByText(/hello/i);
  const linkElement2 = screen.getByText("hello");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();

  expect(true).toBe(true);
});
