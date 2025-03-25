import Card from "./ui/card";
import Foot from "./components/foot";
import { Head } from "./components/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head />
      <Foot />
      <section className="flex  flex-col gap-4  items-center  ">
        <Card link="/about" heading="About Me" text="More about me" />
        <Card link="/projects" heading="Projects" text="Stuff I've built" />
        {/* <Card link="/photos" heading="Photos" text="Some photos I took" /> */}
      </section>
    </>
  );
}
