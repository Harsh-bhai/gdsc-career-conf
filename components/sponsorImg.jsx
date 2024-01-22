import React from 'react'
import ImageComponent from './imageComponent'

const SponsorImg = () => {
  return (
    <div className='md:mx-40 mx-8'>
        <section className=''>
        <h2 className="font-secondary md:text-[3.5vw] text-4xl md:p-0 px-8 my-20 self-start ">
            Our <span className="text-primary">Sponsors</span>
          </h2>
            <div className='flex flex-wrap justify-between '>
                <ImageComponent imgUrl={"github.png"} personName={"Github"}/>
                <ImageComponent imgUrl={"github.png"} personName={"Github"}/>
                <ImageComponent imgUrl={"github.png"} personName={"Github"}/>
                <ImageComponent imgUrl={"github.png"} personName={"Github"}/>
            </div>
        </section>
    </div>
  )
}

export default SponsorImg