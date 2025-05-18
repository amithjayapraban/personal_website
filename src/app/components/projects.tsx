import React from "react";

function Projects() {
  return (
    <a
      rel="noopener"
      target="_blank"
      href="https://github.com/amithjayapraban"
      className={`w-[18rem] lg:w-[28rem]     group rounded-lg border border-transparent bg-cardbg px-5 py-4 transition-colors `}
    >
      <h2 className="mb-3  flex items-center gap-1 text-xl font-medium  ">
        Projects
        <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </h2>
      <p className="m-0   break-words text-sm text-neutral-600">
        Stuff I&apos;ve built
      </p>
    </a>
  );
}

export default Projects;
