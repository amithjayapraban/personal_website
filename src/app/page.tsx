import { Head } from "./components/head";
import React from "react";
import Skills from "./components/skills";
import Socials from "./components/socials";
import Experience from "./components/experience";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <Head />
      <Socials />
      <section className="flex  flex-col gap-4  items-center  ">
        <Experience />
        <Skills />
        <Projects />
      </section>
    </>
  );
}
