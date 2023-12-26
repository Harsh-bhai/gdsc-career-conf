import React from 'react'

const Careerconf = () => {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className="md:w-1/2 p-12">
            <h1 className="font-semibold text-4xl my-4 text-black">
              What Is GDSC Career-Conf ?
            </h1>
            <p>
            GDSC CareerConf, a dynamic one-day conference organized by Google Developers Student Clubs at BIT-D, is designed to expand students&rsquo; horizons within the tech industry. Our mission is to offer comprehensive insights into the diverse spectrum of career opportunities available in the ever-evolving world of technology. Through engaging talks, interactive workshops, and networking sessions, we aim to equip students with the knowledge, resources, and connections vital for navigating and thriving in various tech career paths. Join us as we delve into the vast and exciting landscape of tech careers, empowering the next generation of innovators and professionals
            </p>
          </div>
        <div className="md:w-1/2 p-10 space-y-10">
            <div className="flex space-x-4">
                <img src="majesticons_dollar-circle.png" className='h-20' alt="" />
                <div className="flex flex-col ">
                    <span className='font-semibold text-2xl'>Discovery</span>
                    <span className='text-sm'>Unveiling Frontiers: GDSC BITD&rsquo;s Quest for Technological Breakthroughs</span>
                </div>
            </div>
            <div className="flex space-x-4">
                <img src="majesticons_dollar-circle-1.png" className='h-20' alt="" />
                <div className="flex flex-col ">
                    <span className='font-semibold text-2xl'>Strategy</span>
                    <span className='text-sm'>GDSC BITD&rsquo;s Methodical Approach to Transformative Implementation</span>
                </div>
            </div>
            <div className="flex space-x-4">
                <img src="majesticons_dollar-circle-2.png" className='h-20' alt="" />
                <div className="flex flex-col ">
                    <span className='font-semibold text-2xl'>Execution</span>
                    <span className='text-sm'>Transforming Vision into Reality: GDSC BITD&rsquo;s Flawless Execution for Technological Advancements</span>
                </div>
            </div>
            <div className="flex space-x-4">
                <img src="majesticons_dollar-circle-3.png" className='h-20' alt="" />
                <div className="flex flex-col ">
                    <span className='font-semibold text-2xl'>Measurement</span>
                    <span className='text-sm'>Measuring Impact: GDSC BITD&rsquo;s Vigorous Analytics for Technological Progress</span>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Careerconf