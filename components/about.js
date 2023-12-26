import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font p-10 text-center md:text-left">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                840+
              </h2>
              <p className="leading-relaxed">Chapter Members</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                7K+
              </h2>
              <p className="leading-relaxed">Impressions</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                3.5k+
              </h2>
              <p className="leading-relaxed">Hosted participants so far</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.6k+
              </h2>
              <p className="leading-relaxed">Event attendees</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full  rounded-lg overflow-hidden mt-6 sm:mt-0">
            <h1 className="font-semibold text-4xl my-4 text-black">
              What Is GDSC BIT-D ?
            </h1>
            <p>
              Google Developer Student Clubs (GDSC) are university-based
              community groups powered by <b>Google Developers</b> for students
              interested in Technology. The aim is to help students bridge the
              gap between theory and practice. We are a group of students who
              are passionate about Technology. Our goal is to bring together
              students from various backgrounds who love learning and applying
              their skills to solve real-world problems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
