import { SkillsProps } from "./skills.types";
import { useState } from "react";

export const SkillsTwo = (props: SkillsProps) => {
  const { skills, skillNumber } = props;
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill} {skillNumber}
          </li>
        ))}
      </ul>
      {isLogged ? (
        <button>start learning</button>
      ) : (
        <button
          onClick={() => {
            setIsLogged(true);
          }}
        >
          login
        </button>
      )}
    </>
  );
};
