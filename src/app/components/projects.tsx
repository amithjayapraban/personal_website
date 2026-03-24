import React from "react";
import { ArrowRight } from "lucide-react";

function Projects() {
  return (
    <a
      rel="noopener"
      target="_blank"
      href="https://github.com/amithjayapraban"
      className={`w-full   group rounded-lg border border-transparent bg-cardbg px-5 py-4  mb-8 transition-colors `}
    >
      <h3 className="mb-3  flex items-center gap-1 text-xl font-medium  ">
        Projects
        <span className="inline-block  transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          <ArrowRight size={24} />
        </span>
      </h3>
      <p className="m-0   break-words text-sm text-neutral-600">
        Stuff I&apos;ve built
      </p>
    </a>
  );
}

export default Projects;
