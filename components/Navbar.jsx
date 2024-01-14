import React from "react";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  const toggle = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
      document.body.style.overflow = "auto"; // Disable scrolling
    }
  };
  const ref = useRef();
  return (
    <div className="md:sticky fixed md:mb-0 md:top-0 md:z-50 w-full bg-dark z-[100]">
      <div className="w-full navbar flex flex-col md:flex-row items-center text-white md:p-2 py-0 ">
        <div className=" -top-2 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden">
          {" "}
          <GiHamburgerMenu onClick={toggle} />
        </div>
        <Link href={"/"}>
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 md:z-10 my-4 md:my-0 mx-10 cursor-pointer">
            <img src="gdsclogo.png" alt="" className="w-20" />
            {/* <span className="ml-3 text-white text-xl">Gdsc-Careeer-Conf</span> */}
          </div>
        </Link>
        <div
          ref={ref}
          className="navitems md:justify-end md:mr-20  bg-black z-50 flex flex-col md:flex-row md:items-center md:bg-inherit border-gray-700 md:border-0 border-r-2 px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-[105vh]  md:h-auto md:w-full w-2/3 md:static md:translate-x-0  md:transition-none ease-in-out"
        >
          <span
            className="absolute top-8 left-8
          "
            onClick={toggle}
          >
            <AiFillCloseCircle className="text-4xl font-extralight md:hidden" />
          </span>
          <div className=" flex flex-col md:flex-row md:items-center md:space-x-12  mainitems my-24 md:my-4 space-y-6 md:space-y-0 md:after:-mr-16">
            {/* <Link  href={"/about"}><div onClick={toggle} className='hover:text-primary text-white cursor-pointer'>About</div></Link> */}
            {/* <Link  href={"/services"}><div onClick={toggle} className='hover:text-primary text-white cursor-pointer'>Services</div></Link> */}
            {/* <Link href={"#About"}>
              <div
                onClick={toggle}
                className="hover:text-primary text-white cursor-pointer"
              >
                GDSC-BITD
              </div>
            </Link> */}
            <Link href={"#careerconf"}>
              <div
                onClick={toggle}
                className="hover:text-primary text-white cursor-pointer"
              >
                Career-Conf
              </div>
            </Link>
            <Link href={"#sponsor"}>
              <div
                onClick={toggle}
                className="hover:text-primary text-white cursor-pointer"
              >
                Sponser
              </div>
            </Link>
            <Link href={"#speaker"}>
              <div
                onClick={toggle}
                className="hover:text-primary text-white cursor-pointer"
              >
                Speaker
              </div>
            </Link>
            <Link href={"#about"}>
              <div
                onClick={toggle}
                className="hover:text-primary text-white cursor-pointer"
              >
                About
              </div>
            </Link>
            <Link href={"/register"}>
              <button className="inline-flex text-black font-thin font-secondary bg-primary border-0 py-1 px-4 focus:outline-none hover:bg-white rounded text-xl">
                REGISTER
              </button>
            </Link>
          </div>
        </div>
        {/* <button class=" text-white bg-yellow-500  mr-40  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
        {/* <div className=" account absolute top-1  md:top-[-5px] right-0 text-4xl p-6 cursor-pointer ">
          <MdAccountCircle />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
