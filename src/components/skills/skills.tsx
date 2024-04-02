import { SkillsProps } from "./skills.types";

export const Skills = ({ skills, a }: SkillsProps) => {
  return (
    <>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill} {a}
          </li>
        ))}
      </ul>
    </>
  );
};
