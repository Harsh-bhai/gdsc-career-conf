import React from 'react'
import Link from 'next/link'
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';


const Footer = () => {
  return (
    <div><footer className= "bg-inherit  text-black body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link target='_blank' href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
      <img src="gdsclogo.png" alt="" className='w-12'/>
      
      </Link>






      <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© All Rights Reserved</p>
      <span className="flex space-x-4 sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start md:mt-3">
      <Link target='_blank' href={'https://github.com/Harsh-bhai'} className="text-gray-500">
      <AiFillGithub className='text-green-600 text-xl cursor-pointer'/>
          </Link>
      <Link target='_blank' href={'https://discord.com/users/898776433638400041'} className="text-gray-500">
      <SiDiscord className='text-green-600 text-xl cursor-pointer'/>
          </Link>
      <Link target='_blank' href={'https://www.facebook.com/profile.php?id=100014142857134  '} className="text-gray-500">
      
      <ImFacebook className='text-green-600 cursor-pointer'/>
      
          </Link>
     
        <Link target='_blank' href={'https://www.instagram.com/harshdew.12/'} className="ml-3 text-gray-500">
            <BsInstagram className='text-green-600 cursor-pointer'/>
          </Link>
          <Link target='_blank' href={'https://www.linkedin.com/in/harsh-dewangan-3a44b5232/'} className="ml-3 text-gray-500">
            <FaLinkedinIn className='text-green-600 cursor-pointer'/>
          </Link>
      </span>
    </div>
  </footer></div>
  )
}

export default Footer