import React from 'react'

const PreviousEvents = () => {
  return (
    <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap md:w-1/2">
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="1.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="6.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="3.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="4.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="5.jpg"
                />
              </div>
              <div className="md:p-2 p-1 md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="2.jpg"
                />
              </div>
            </div>
          </div>
  )
}

export default PreviousEvents