import React from "react";
function Experience() {
  let experiences = [
    {
      org: "HashedIn by Deloitte",
      logo: "/hashedin_logo.jpeg",
      title: "Software Engineer",
      from: "Jan 2025",
      to: "Present",
    },
  ];
  return (
    <>
      <section className="w-[18rem] flex flex-col gap-4 items-start lg:w-[28rem] rounded-lg bg-cardbg px-5 py-4 ">
        <h3 className="text-xl font-medium  ">Experience</h3>
        <ul className="flex flex-wrap gap-4 w-full">
          {experiences.map((experience) => (
            <li
              key={experience.org}
              className="bg-background rounded-md px-4 w-full py-4"
              aria-label={`${experience.title} at ${experience.org} from ${experience.from} to ${experience.to}`}
            >
              <div className="flex gap-4 items-center">
                <img
                  className="rounded-full w-10"
                  src={experience.logo}
                  alt={experience.org}
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{experience.org}</span>

                  <span className="text-xs">{experience.title}</span>

                  <time className="text-xs text-neutral-500">
                    {experience.from} - {experience.to}
                  </time>
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
