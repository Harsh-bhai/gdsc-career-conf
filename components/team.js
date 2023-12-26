import React from "react";

const Team = () => {
  return (
    <div className="flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row-reverse p-2 m-2  justify-center items-center md:p-10">
        {/* <h1 className="text-3xl w-96 text-center">Organized by</h1>
        <img src="bitd.jpg" alt="" /> */}
        <div className="md:w-1/3 p-6 text-center md:text-left text-sm mx-2 md:text-xl text-stone-500 my-4">
        Meet the Brilliant Minds of GDSC BITD! Our diverse team is a fusion of creative thinkers, tech enthusiasts, and innovators united by a passion for technology and development. Each member brings unique expertise and a shared dedication to drive impactful change. Get to know the faces behind our pioneering projects, learn about their expertise, and discover the collaborative spirit shaping the future of tech at GDSC BITD.
        </div>
        <div className="md:w-2/3 md:grid flex">
          <div className="flex items-center justify-center md:flex-row flex-col space-x-4  p-2">
            <div className="flex-col px-6 py-2  max-w-7xl">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="Rectangle 185.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="Rectangle 184.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="Rectangle 181.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-4  p-2 items-center justify-center md:flex-row flex-col ">
            <div className="flex-col px-6 py-2 ">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="Rectangle 182.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="Rectangle 183.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="flex-col px-6 py-2 ">
              <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="Rectangle 186.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
