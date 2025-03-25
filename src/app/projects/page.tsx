import React from "react";
import { Head } from "../components/head";
import Card from "../ui/card";
import Foot from "../components/foot";

function Projects() {
  let projects: any = [
    {
      name: "iP2P",
      desc: "Peer to peer file transfer",
      tags: ["React", "Tailwind", "WebRTC", "WebSockets"],
      link: "https://github.com/amithjayapraban/iP2P",
    },
    {
      name: "Algo Visualiser",
      desc: "Visualiser for some common sorting algorithms",
      tags: ["React", "Tailwind"],
      link: "https://github.com/amithjayapraban/sorting-algorithm-visualiser",
    },
  ];
  return (
    <>
      <Head />
      <Foot />
      <section className="flex flex-col gap-4   items-start ">
        {projects.map((i: any) => {
          return (
            <Card
              target="_blank"
              key={i.name}
              link={`${i.link}`}
              heading={i.name}
              text={i.desc}
              tags={i.tags}
            />
          );
        })}
      </section>
    </>
  );
}

export default Projects;
