import React from "react";

const TitleDescription = ({ title, description, buttonLabel }) => {
  return (
    <section className=" body-font">
      <div className="container mx-auto flex px-5 md:-my-10 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className=" font-secondary sm:text-4xl text-3xl mb-4 font-medium ">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <button className="inline-flex text-black font-secondary bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded text-lg">
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleDescription;
