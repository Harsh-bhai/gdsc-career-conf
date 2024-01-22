import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const navLinks = [
  { title: "Career Conf", id: "hero" },
  { title: "Collaborate", id: "collab" },
  { title: "About", id: "about" },
];

export default function App() {
  // const scrollToSection = (sectionId) => {
  //   if (typeof window !== 'undefined') {
  //     const section = document.getElementById(sectionId);

  //     if (section) {
  //       section.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id) => {
    console.log(id);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu w-full fixed md:mb-0 z-[100] overflow-hidden"
    >
      <div className="md-nav md:flex md:flex-row gap-4 items-center bg-dark p-4 hidden px-20">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex flex-row items-center mr-auto text-xl text-white font-secondary gap-2"
          // onClick={() => scrollToSection("hero")}
        >
          <Image src="/logo3.png" alt="" height={30 * 2} width={40 * 2} />
          {/* GDSCBITD */}
        </Link>

        {/* Nav */}
        <ul className="flex flex-row gap-12 items-center">
          {navLinks.map(({ title, id, index }) => (
            <li className="text-white hover:text-primary" key={index}>
              <Link href={`/`} 
              // onClick={scrollToSection(id)}
              >
                {title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/register">
              <button className="bg-primary text-white font-secondary px-4 py-2 rounded-md transition duration-300 hover:scale-105">
                REGISTER
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm-nav w-screen md:hidden flex flex-row items-center bg-dark justify-between px-4">
        {/* Logo */}
        <div className="flex flex-row items-center mr-auto text-xl text-white font-secondary gap-2">
          <Image src="/logo3.png" alt="" height={30 * 2} width={40 * 2} />
          {/* GDSCBITD */}
        </div>

        {/* Nav */}
        <motion.button
          className=" self-end text-white text-2xl py-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 23 23"
            className="text-white"
          >
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className={`md:hidden block w-screen text-center flex flex-col gap-6 bg-dark text-white p-4 fixed top-12 right-0`}
        >
          {navLinks.map(({ title, id, index }) => (
            <Link
              href={`/#${id}`}
              key={index}
              onClick={() => {
                setIsOpen(!isOpen);
                handleLinkClick(id);
              }}
            >
              <motion.li variants={itemVariants} className="hover:text-primary">
                {title}
              </motion.li>
            </Link>
          ))}
          <Link href="/register">
            <motion.li variants={itemVariants} className="hover:text-primary">
              <button
                className="bg-primary text-white font-secondary px-4 py-2 rounded-md hover:scale-115"
                onClick={() => setIsOpen(!isOpen)}
              >
                REGISTER
              </button>
            </motion.li>
          </Link>
        </motion.ul>
      </div>
    </motion.nav>
  );
}
