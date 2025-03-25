import React from "react";
import { Head } from "../components/head";
import Card from "../ui/card";
import Foot from "../components/foot";

const About = () => {
  let skills = [
    "Javascript",
    "Typescript",
    "Python",
    "React",
    "Tailwind",
    "CSS",
    "SQL",
  ];
  return (
    <>
      <Head />
      <Foot />
      <section className="flex flex-col gap-4 items-start ">
        <section className="w-[18rem] lg:w-[28rem] rounded-lg bg-cardbg px-5 py-4 ">
          <section className="flex flex-col gap-4 items-start ">
            <p>Currently working at HashedIn by Deloitte.</p>
            <section className="flex flex-col gap-4 items-start">
              <h3 className="text-lg font-medium ">Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className=" text-sm bg-background rounded-md px-3 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
