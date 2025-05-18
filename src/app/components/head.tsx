import Link from "next/link";
import React from "react";

export const Head = () => {
  return (
    <Link
      href={"/"}
      className=" group flex mt-12  items-center justify-start flex-col"
    >
      <h1 className="text-[6rem] lg:text-[8rem] text-center bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent font-semibold leading-tight">
        Amith
      </h1>
      {/* <h2 className="text-2xl lg:text-3xl opacity- 75 -mt-1 font-medium text-center  ">

      </h2> */}
    </Link>
  );
};
