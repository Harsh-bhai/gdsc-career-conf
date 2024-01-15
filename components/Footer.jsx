import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { title: "Home", link: "/" },
  { title: "GDSC BITD", link: "/" },
  { title: "CareerConf", link: "/" },
  { title: "Sponsor", link: "/" },
  { title: "About Us", link: "/" },
];

const Footer = () => {
  function discordlink() {
    // window.open("https://discord.gg/KnthBxzApR");
  }
  function sponsor_us() {
    window.open("https://forms.gle/Tc7iLKtAc3yMFiND8");
  }

  return (
    <footer
      id="Footer"
      className="bg-dark text-light flex flex-col items-center mt-24"
    >
      <div className="md:grid md:grid-cols-3 flex flex-col w-full md:p-12 md:py-12 py-8 px-4  border-y">
        <section className="flex-content w-full relative flex flex-col p-4 md:pl-24">
          <p className="text-white text-xl">CAREER CONF GDSC 2024</p>
          <p className="content-p font-tertiary opacity-60 mb-2">
            {`Uncover Untapped Tech Career Paths`}
          </p>
          <div className="btn-div font-secondary flex flex-col gap-2 max-w-[100vw] md:max-w-full">
            <Link
              href={"/register"}
              className="btn register flex items-center justify-center bg-primary text-light rounded-lg hover:scale-105 transition ease-in duration-600 md:text-xl text-base md:w-[60%] w-full mr-[4%] mr-0 my-0.5 mx-0 py-2"
            >
              REGISTRATION
            </Link>
          </div>
        </section>
        <section className="flex-content flex-wrap relative md:flex hidden flex-col p-4 pb-0 pl-8 md:pl-[40%] font-tertiary">
          <h3 className="text-lg font-primary text-light mb-4">Site</h3>
          {/* Update Links as needed */}
          {footerLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="font-tertiary text-light my-2 mx-0 opacity-70 w-fit hover:text-primary"
            >
              {item.title}
            </Link>
          ))}

          {/* Other links */}
        </section>
        <section className="flex-content relative flex flex-col p-4 md:-ml-8 mb-4 md:items-center items-start md:w-auto w-screen ">
          <h3 className="social-text font-primary text-lg text-light md:mb-4">
            Socials
          </h3>
          <div className="flex-socials w-full flex flex-row flex-nowrap md:justify-center justify-left gap-4">
            <Link
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://www.instagram.com/gdscbitd/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram
                size="2rem"
                className="socials-icon text-white hover:text-primary"
              />
            </Link>
            <Link
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                size="2rem"
                className="socials-icon text-white hover:text-primary"
              />
            </Link>
            <Link
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter
                size="2rem"
                className="socials-icon text-white hover:text-primary"
              />
            </Link>
          </div>
        </section>
      </div>
      <div className="flex">
        <section className="flex-content relative flex p-4 w-full">
          <p className="disclaimer mx-auto flex justify-center items-center gap-1.5 font-tertiary">
            Made with{" "}
            <span className="font-semibold">
              3 AM milk <span className="text-primary">powder!</span> 🥛
            </span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
