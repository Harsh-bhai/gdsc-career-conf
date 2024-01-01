import React from 'react'
import TitleDescription from './titleDescription'

const SpeakerRegister = () => {
  return (
    <div>
        <div className="w-screen  relative">
        <div className="text-[19.5vw] font-garalama text-black text-center z-0 heading-outline">
          SPEAKER
        </div>
        <div className="absolute font-garalama text-4xl z-10 bg-center">
          Register as a Speaker
        </div>
      </div>
      <TitleDescription description={"Ready to share your insights and inspire the next generation of developers? Join us as a speaker and be part of a day dedicated to career exploration. Register now!"} buttonLabel={"REGISTER SPKEAKER"}/>
    </div>
  )
}

export default SpeakerRegister

