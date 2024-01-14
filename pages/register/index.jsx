import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-[58vh] mt-22 text-white relative ">
      <div className="md:text-5xl text-xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:whitespace-nowrap flex flex-col gap-8 justify-center">
        <div className="whitespace-nowrap">Tickets will be out soon...</div>
        <Link
          href={"/"}
          className="text-lg bg-primary text-white py-2 px-4 w-fit text-center rounded mx-auto"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default page;
