import Image from "next/image";
import React from "react";
function Experience() {
  let experiences = [
    {
      org: "HashedIn by Deloitte",
      logo: "/hashedin_logo.jpeg",
      roles: [
        { title: "Software Engineer", from: "Jan 2025", to: "Present" },
        { title: "Intern", from: "Oct 2024", to: "Dec 2024" },
      ],
    },
  ];
  return (
    <>
      <section className="w-full flex flex-col gap-4 items-start  rounded-lg bg-cardbg px-5 py-4 ">
        <h3 className="text-xl font-medium  ">Experience</h3>
        <ul className="flex flex-wrap gap-4 w-full">
          {experiences.map((experience) => (
            <li
              key={experience.org}
              className="bg-background rounded-md px-4 w-full py-4"
              aria-label={`${experience?.roles[0].title} at ${experience.org} `}
            >
              <div className="flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full self-start"
                  src={experience.logo}
                  alt={experience.org}
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{experience.org}</span>
                  {experience?.roles.map((role) => (
                    <div key={role.title} className="flex flex-col">
                      <span className="text-xs">{role.title}</span>

                      <time className="text-[.6rem] text-neutral-500">
                        {role.from} - {role.to}
                      </time>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Experience;
