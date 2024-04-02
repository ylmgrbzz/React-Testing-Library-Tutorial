import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  it("renders the application form", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
    });
    const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    const paragraph = screen.getByText("All fields are mandatory");
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    const nameElement2 = screen.getAllByLabelText("Name");
    const bioElement = screen.getByLabelText("Bio");
    const bioElement2 = screen.getByRole("textbox", { name: "Bio" });
    const jobLocation = screen.getByLabelText("Job location");
    const jobLocationElement = screen.getByRole("combobox", {
      name: "Job location",
    });
    const termsElement = screen.getByRole("checkbox", {
      name: "I agree to the terms and conditions",
    });
    const submitButton = screen.getByRole("button", { name: "Submit" });

    expect(bioElement).toBeInTheDocument();
    expect(pageHeading).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(bioElement2).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
    expect(submitButton).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(nameElement2).toHaveLength(1);
    expect(jobLocationElement).toBeInTheDocument();
    expect(jobLocation).toBeInTheDocument();
  });
});
