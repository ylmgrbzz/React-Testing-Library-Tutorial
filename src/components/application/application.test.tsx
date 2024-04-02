import { Application } from "./application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  it("renders the application form", () => {
    render(<Application />);

    //   getByText: Bu fonksiyon, DOM'de belirli bir metni içeren herhangi bir öğeyi (genellikle bir <div>, <p>, <span> gibi) bulur. Metin,
    //  bu öğenin içeriğinde direkt olarak bulunabilir veya alt öğelerinin içeriğinde olabilir.

    //    Bu fonksiyon, etiketi belirli bir metinle eşleşen bir HTML form elemanını bulmak için kullanılır.
    //       Bu, genellikle bir < label > etiketi tarafından sağlanan bir form öğesi için kullanışlıdır.
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
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    const placeHolder = screen.getByPlaceholderText("Fullname");
    const displayValue = screen.getByDisplayValue("Vishwas");
    const imageElement = screen.getByAltText("a person with a laptop");
    const customElement = screen.getByTestId("custom-element");
    const closeElement = screen.getByTitle("close");
    const yesElement = screen.getByTitle("yes");

    expect(displayValue).toBeInTheDocument();
    expect(closeElement).toBeInTheDocument();
    expect(yesElement).toBeInTheDocument();
    expect(customElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(placeHolder).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
    expect(termsElement2).toBeInTheDocument();
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
