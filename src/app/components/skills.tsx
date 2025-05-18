import React from "react";

const Skills = () => {
  let skills = [
    "Javascript",
    "Typescript",
    "Python",
    "React.js",
    "Next.js",
    "Tailwind",
    "CSS",
    "SQL",
    "GraphQL",
  ];
  return (
    <section
      aria-labelledby="skills-heading"
      className="w-[18rem] flex flex-col gap-4 items-start lg:w-[28rem] rounded-lg bg-cardbg px-5 py-4 "
    >
      <h3 id="skills-heading" className="text-xl font-medium  ">
        Skills
      </h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className=" text-sm  text-neutral-600 bg-background rounded-md px-3 py-1"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
