import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const footerLinks = [
  { title: "Home", link: "/" },
  { title: "GDSC BITD", link: "/" },
  { title: "CareerConf", link: "/" },
  { title: "Sponsor", link: "/" },
  { title: "About Us", link: "/" },
];

const Footer = () => {
  function discordlink() {
    window.open("https://discord.gg/KnthBxzApR");
  }
  function registration() {
    window.open("https://lu.ma/opin-hacks");
  }
  function sponsor_us() {
    window.open("https://forms.gle/xzP1vVgXWMBpSdHF9");
  }

  return (
    <footer id="Footer" className="p-8 md:p-4 bg-dark text-light">
      <div className="grid grid-cols-3">
        <section className="flex-content w-full relative flex flex-col p-4">
          LOGO
          <p className="content-p font-tertiary opacity-60 mb-2">
            A battle through time.
          </p>
          <div className="btn-div font-secondary flex flex-col gap-2 max-w-[100vw] md:max-w-full">
            <button
              className="btn register bg-primary text-light rounded-lg hover:scale-105 transition ease-in duration-600 md:text-2xl text-base md:w-[60%] w-full mr-[4%] mr-0 my-0.5 mx-0 md:p-3 p-1"
              onClick={registration}
            >
              REGISTER
            </button>
            <button
              className="btn register bg-white text-black rounded-lg hover:scale-105 transition ease-in duration-600 md:text-2xl text-base md:w-[60%] w-full mdLmr-[4%] mr-0 my-0.5 mx-0 md:p-3 p-1"
              onClick={registration}
            >
              SPONSOR US
            </button>
          </div>
        </section>
        <section className="flex-content flex-wrap relative flex flex-col p-4 pl-8 font-tertiary">
          <h3 className="text-lg font-primary text-light mb-4">Site</h3>
          {/* Update Links as needed */}
          {footerLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="font-tertiary text-light my-2 mx-0 opacity-70 w-fit"
            >
              {item.title}
            </Link>
          ))}

          {/* Other links */}
        </section>
        <section className="flex-content relative flex flex-col p-4">
          <h3 className="social-text ml-4 font-primary text-lg text-light mb-4">
            Socials
          </h3>
          <div className="flex-socials w-full flex flex-row flex-nowrap gap-4">
            <Link
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://www.instagram.com/gdscbitd/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram
                size="2rem"
                className="socials-icon text-primary"
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
                className="socials-icon text-primary"
              />
            </Link>
            <Link
              className="font-tertiary text-light my-2 mx-0 opacity-70"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size="2rem" className="socials-icon text-primary" />
            </Link>
          </div>
        </section>
      </div>
      <hr className="hr-tag w-4/5 opacity-30 mx-auto" />
      <div className="flex">
        <section className="flex-content relative flex p-4 pb-0 w-full">
          <p className="disclaimer mx-auto flex justify-center items-center gap-1.5 font-tertiary">
            Made with{" "}
            <span className="font-semibold">3 AM milk powder! 🥛</span>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
