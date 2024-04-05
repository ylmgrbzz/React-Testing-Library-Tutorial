import { render, screen } from "@testing-library/react";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-providers";

describe("MuiMode", () => {
  test("should render the mui mode", () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });
    const elementRole = screen.getByRole("heading");
    expect(elementRole).toHaveTextContent("light mode");
  });
});
