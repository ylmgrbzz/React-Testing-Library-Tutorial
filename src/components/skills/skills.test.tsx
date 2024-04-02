import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  it("renders the skills component", () => {
    const skills = ["React", "TypeScript", "Jest"];
    const skillNumber = 1;

    render(<Skills skills={skills} skillNumber={skillNumber} />);

    const heading = screen.getByRole("heading", { name: "Skillsss" });
    const listItems = screen.getAllByRole("listitem");
    const listItems2 = screen.getByRole("list");
    const listItemsText = listItems.map((listItem) => listItem.textContent);

    expect(heading).toBeInTheDocument();
    expect(listItems).toHaveLength(skills.length);
    expect(listItems2).toBeInTheDocument();
    expect(listItemsText).toEqual(["React 1", "TypeScript 1", "Jest 1"]);
  });
});
