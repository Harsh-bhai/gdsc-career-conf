/* eslint-disable @next/next/no-img-element */
// components/ImageComponent.js

const ImageComponent = ({ imgUrl, personName, Type, size }) => {
  const imageSize =
    size === "large"
      ? "md:w-[18rem] w-[10rem] md:h-[18rem] h-[10rem]"
      : "md:w-[14rem] w-[10rem] md:h-[14rem] w-[10rem]";

  return (
    <div className="relative">
      <img src="/stars.png" alt="" className="absolute inset-0 -z-10" />
      <img
        src={imgUrl}
        alt={personName}
        className={`${imageSize} object-cover rounded-md`}
      />
      <div className="md:absolute md:top-[40%] md:-right-[20%]  text-white text-center p-2 bg-opacity-50">
        <div className="flex md:flex-col items-start flex-row md:gap-0 gap-2">
          {" "}
          {personName.split(" ").map((item) => (
            <p
              key={item}
              className={`${
                size === "large"
                  ? "md:text-lg text-sm "
                  : "md:text-base text-sm"
              }} text-left `}
            >
              {item}
            </p>
          ))}
        </div>

        <p className="md:text-xs text-3xs border-red-500 text-left border-2 border-l-0 border-r-0 border-b-0">
          {Type}
        </p>
      </div>
    </div>
  );
};

export default ImageComponent;
