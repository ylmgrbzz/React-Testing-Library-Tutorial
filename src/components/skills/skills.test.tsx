import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";
import { SkillsTwo } from "./skillstwo";
import { log } from "console";

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

describe("SkillsTwo", () => {
  it("renders the skills component", () => {
    const skills = ["React", "TypeScript", "Jest"];
    const skillsNumber = 1;
    render(<SkillsTwo skills={skills} skillNumber={skillsNumber} />);
    // getByRole fonksiyonu, belirtilen role ve belirtilen seçiciye göre eşleşen bir element bulamazsa bir hata fırlatır. Bu nedenle, kullanıldığında bulunan
    // elementin kesinlikle sayfada olması gerektiğini varsayar ve bulunamazsa bir hata mesajı döndürür.
    // Bu nedenle, getByRole fonksiyonunu kullanırken, eğer belirtilen role ve seçiciye sahip element bulunamazsa test başarısız olur ve bir hata alırsınız.
    // queryByRole:

    // queryByRole fonksiyonu ise, belirtilen role ve belirtilen seçiciye göre eşleşen bir element bulamazsa null döner. Bu nedenle, hata fırlatmaz ve testiniz devam eder.
    // Bu fonksiyon, elementin sayfada olup olmadığını kontrol etmek için kullanılabilir. Element bulunamazsa testin başarılı olması beklenir çünkü queryByRole null döner.

    const loginButton = screen.getByRole("button", {
      name: "login",
    });
    expect(loginButton).toBeInTheDocument();

    const startLearningButton = screen.queryByRole("button", {
      name: "start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});

test("start learning button is eventually displayed", async () => {
  const utils = render(
    <SkillsTwo skills={["React", "TypeScript", "Jest"]} skillNumber={1} />
  );

  logRoles(utils.container);
  //   screen.debug();

  const startLearningButton = await screen.findByRole(
    "button",
    {
      name: "start learning",
    },
    { timeout: 2000 }
  );
  expect(startLearningButton).toBeInTheDocument();
});
