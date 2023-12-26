// yarn add react-icons --save
// yarn add hamburger-react

import React from 'react'
import { useRef } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
const Navbar = () => {
  const toggle = () => {
    if ((ref.current.classList.contains("-translate-x-full"))) {
      ref.current.classList.remove("-translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if ((ref.current.classList.contains("translate-x-0"))) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("-translate-x-full")
    }
  }
  const ref = useRef()
  return (
    <div className='md:sticky md:top-0 md:bg-white md:z-50 w-full'>
      <div className="w-full navbar flex flex-col md:flex-row items-center text-black md:p-2 shadow-lg py-4 ">
     <div className=' top-0 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden'> <GiHamburgerMenu onClick={toggle}  /></div>
        <Link href={"/"}><div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 md:z-10 my-4 md:my-0 mx-10 cursor-pointer">
          <img src="gdsclogo.png" alt="" className='w-20'/>
          {/* <span className="ml-3 text-black text-xl">Gdsc-Careeer-Conf</span> */}
        </div></Link>
        <div ref={ref} className="navitems z-50 flex flex-col md:flex-row md:items-center md:bg-inherit bg-white border-gray-400 md:border-0 border-2 px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-full md:h-auto md:w-full w-2/3 md:static md:translate-x-0  md:transition-none ease-in-out" >
          <span className='absolute top-8 left-8
          'onClick={toggle} ><AiFillCloseCircle className='text-4xl font-extralight md:hidden' /></span>
          <div className=" flex flex-col md:flex-row md:items-center md:space-x-8  mainitems my-24 md:my-4 space-y-6 md:space-y-0">
            {/* <Link  href={"/about"}><div onClick={toggle} className='hover:text-green-500 text-black cursor-pointer'>About</div></Link> */}
            {/* <Link  href={"/services"}><div onClick={toggle} className='hover:text-green-500 text-black cursor-pointer'>Services</div></Link> */}
            <Link  href={"#About"}><div onClick={toggle} className= 'hover:text-green-500 text-black cursor-pointer'>GDSC-BITD</div></Link>
            <Link  href={"#careerconf"}><div onClick={toggle} className= 'hover:text-green-500 text-black cursor-pointer'>Career-Conf</div></Link>
            <Link  href={"#PreviousEvents"}><div onClick={toggle} className='hover:text-green-500 text-black cursor-pointer'>Our Work</div></Link>
            <Link  href={"#team"}><div onClick={toggle} className= 'hover:text-green-500 text-black cursor-pointer'>Team</div></Link>
            <Link  href={"#extras"}><div onClick={toggle} className= 'hover:text-green-500 text-black cursor-pointer'>About</div></Link>
          </div>
        </div>
        {/* <button class=" text-black bg-yellow-500  mr-40  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
        {/* <div className=" account absolute top-1  md:top-[-5px] right-0 text-4xl p-6 cursor-pointer ">
          <MdAccountCircle />
        </div> */}
      </div>
    </div>

  )
}

export default Navbar