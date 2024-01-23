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
      name: "GDSC SSTC",
      img: "/GDSC_SSTC.png",
      href: "https://gdsc.community.dev/shri-shankaracharya-technical-campus-bhilai/",
    },
    {
      name: "GDSC RCET",
      img: "/GDSC_RCET.png",
      href: "https://gdsc.community.dev/rungta-college-of-engineering-and-technology-bhilai/",
    },
    {
      name: "GDG Bhilai",
      img: "/GDG_BHILAI.png",
      href: "https://gdg.community.dev/gdg-bhilai/",
    },
    {
      name: "Coding Ninja",
      img: "/CodingNinja.png",
      href: "https://www.codingninjas.com/",
    },
    // {
    //   name: "GDSC BIT Raipur",
    //   img: "/GDSC_BITR.png",
    //   href: "https://www.codingninja.com/",
    // },
  ];

  return (
    <div
      id="sponsors"
      className="w-screen md:mt-72 md:mb-0 my-28 px-4 md:w-5/6 mx-auto min-h-screen flex flex-col justify-center md:gap-20 gap-8"
    >
      <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0  text-center ">
        Meet our incredible Sponsors
      </h2>
      {/* title sponsor */}
      <div className="main-sponsors flex flex-col justify-center md:mt-12 mt-4">
        <h3 className="font-secondary text-primary md:text-[2.5vw] text-2xl md:p-0 px-8 text-center ">
          Title Sponsors
        </h3>
        <div className="s-row grid grid-cols-1 md:w-1/2 w-4/5 mx-auto md:my-[4rem] my-[2.5rem]">
          {sponsors.map(({ name, img, href, index }) => (
            <Link
              target="blank"
              className="s-col border-2 border-text flex items-center justify-center p-[60px] z-10"
              href={href}
              id={name.toLowerCase()}
              key={index}
            >
              <img src={img} className="w-72" alt={name} srcset="" />
            </Link>
          ))}
        </div>
      </div>
      {/* community partners */}
      <div className="community-partners flex flex-col justify-center">
        <h3 className="font-secondary text-primary md:text-[2.5vw] text-2xl md:p-0 px-8 text-center ">
          Community Partners
        </h3>
        <div className="s-row grid grid-cols-1 md:grid-cols-4 w-4/5 mx-auto md:my-[4rem] my-[2.5rem]">
          {partners.map(({ name, img, href, index }) => (
            <Link
              target="blank"
              className="s-col border-2 border-text flex items-center justify-center md:py-auto py-8 px-12 z-10"
              href={href}
              id={name.toLowerCase()}
              key={index}
            >
              <img src={img} className="w-90" alt={name} srcset="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
