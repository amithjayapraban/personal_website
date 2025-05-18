import Link from "next/link";
import React from "react";
type CardProps = {
  link: string;
  heading?: string;
  text?: string;
  textalign?: string;
  tags?: string[];
  target?: string;
};

function Card({
  link,
  heading,
  text,
  textalign = "text-left",
  tags,
  target ,
}: CardProps) {
  return (
    <Link
      target={target ? target : "_self"}
      href={link}
      className={`w-[18rem] lg:w-[28rem]   ${textalign}  group rounded-lg border border-transparent bg-cardbg px-5 py-4 transition-colors `}
    >
      <h2 className="mb-3  flex items-center gap-1 text-xl font-medium  ">
        {heading}
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
      <p className="m-0   break-words text-sm font-medium opacity-75 ">
        {text}
      </p>
      {/* <div className={`group flex items-center  ${textalign}  gap-1`}>
        {tags &&
          tags.map((t: any) => {
            return (
              <p className="text-xs  font-medium opacity-50 " key={t}>
                #{t}
              </p>
            );
          })}
      </div> */}
    </Link>
  );
}

export default Card;
