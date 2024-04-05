import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";

describe("MuiMode", () => {
  test("should render the mui mode", () => {
    render(<MuiMode />);
    const elementRole = screen.getByRole("heading", { name: "light mode" });
    expect(elementRole).toBeInTheDocument();
    expect(elementRole).toHaveTextContent("light mode");
  });
});
