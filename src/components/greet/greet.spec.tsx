import React from "react";
import { render, screen } from "@testing-library/react";
import Greet, { GreetTest } from "./greet";

describe("greet", () => {
  it("greet", () => {
    render(<Greet />);
    const linkElement = screen.getByText(/hello/i);
    const linkElement2 = screen.getByText("hello");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();

    expect(true).toBe(true);
  });

  describe("greetNested3", () => {
    it("greet2", () => {
      render(<GreetTest name="John" />);
      const linkElement = screen.getByText("Hello John");
      expect(linkElement).toBeInTheDocument();

      expect(true).toBe(true);
    });
  });
});
