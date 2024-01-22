import React from "react";
import ImageComponent from "./imageComponent";
import Link from "next/link";
import Image from "next/image";

const Sponsors = () => {
  const sponsors = [
    {
      name: "GitHub",
      img: "/github-logo-white.png",
      href: "https://www.github.com/",
    },
  ];

  const partners = [
    {
      name: "GDSC RCET",
      img: "/github-logo-white.png",
      href: "https://www.github.com/",
    },
    {
      name: "GDSC BITR",
      img: "/github-logo-white.png",
      href: "https://www.github.com/",
    },
    {
      name: "GDSC Amity Raipur",
      img: "/github-logo-white.png",
      href: "https://www.github.com/",
    },
  ];

  return (
    <div className="w-screen my-20 px-4 md:w-5/6 mx-auto min-h-screen flex flex-col justify-center gap-20">
      <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0 px-8 text-center ">
        Meet our incredible Sponsors
      </h2>
      <div className="main-sponsors flex flex-col justify-center">
        <h3 className="font-secondary text-rpimary md:text-[2.5vw] text-2xl md:p-0 px-8 text-center ">
          Title Sponsors
        </h3>
        <div className="s-row grid grid-cols-1 md:w-3/5 w-4/5 mx-auto md:my-[4rem] my-[2.5rem]">
          {sponsors.map(({ name, img, href, index }) => (
            <Link
              target="blank"
              className="s-col border-2 border-primary flex items-center justify-center p-[60px] z-10"
              href={href}
              id={name.toLowerCase()}
              key={index}
            >
              <img src={img} className="w-72" alt={name} srcset="" />
            </Link>
          ))}
        </div>
      </div>
      <div className="community-partners flex flex-col justify-center">
        <h3 className="font-secondary text-rpimary md:text-[2.5vw] text-2xl md:p-0 px-8 text-center ">
          Community Partners
        </h3>
        <div className="s-row grid grid-cols-1 md:grid-cols-3  md:w-3/5 w-4/5 mx-auto md:my-[4rem] my-[2.5rem]">
          {partners.map(({ name, img, href, index }) => (
            <Link
              target="blank"
              className="s-col border-2 border-primary flex items-center justify-center p-[60px] z-10"
              href={href}
              id={name.toLowerCase()}
              key={index}
            >
              <img src={img} className="w-72" alt={name} srcset="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
