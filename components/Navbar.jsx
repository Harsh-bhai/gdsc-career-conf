import { useState } from "react";
import { motion, Variants } from "framer-motion";
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

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu w-screen fixed md:mb-0 z-[1000]"
    >
      <div className="md-nav md:flex md:flex-row gap-4 items-center bg-dark p-4 hidden px-20">
        {/* Logo */}
        <div className="flex flex-row items-center mr-auto text-xl text-white font-secondary gap-2">
          <Image src="/gdsclogo.png" alt="" height={30} width={40} />
          GDSCBITD
        </div>

        {/* Nav */}
        <ul className="flex flex-row gap-12 items-center">
          <li className="text-white hover:text-primary">
            <Link href="/">Career Conf</Link>
          </li>
          <li className="text-white hover:text-primary">
            <Link href="/">Sponsor</Link>
          </li>
          <li className="text-white hover:text-primary">
            <Link href="/">Speakers</Link>
          </li>
          <li className="text-white hover:text-primary">
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/register">
              <button className="bg-primary text-white font-secondary px-4 py-2 rounded-md hover:bg-dark">
                REGISTER
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm-nav w-screen md:hidden flex flex-row items-center bg-dark justify-between px-4">
        {/* Logo */}
        <div className="flex flex-row items-center mr-auto text-xl text-white font-secondary gap-2">
          <Image src="/gdsclogo.png" alt="" height={30} width={40} />
          GDSCBITD
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
          <Link href="/">
            <motion.li variants={itemVariants} className="hover:text-primary">
              Career Conf
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li variants={itemVariants} className="hover:text-primary">
              Sponsors
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li variants={itemVariants} className="hover:text-primary">
              Speakers
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li variants={itemVariants} className="hover:text-primary">
              About
            </motion.li>
          </Link>
          <Link href="/">
            <motion.li variants={itemVariants} className="hover:text-primary">
              <button className="bg-primary text-white font-secondary px-4 py-2 rounded-md">
                REGISTER
              </button>
            </motion.li>
          </Link>
        </motion.ul>
      </div>
    </motion.nav>
  );
}
