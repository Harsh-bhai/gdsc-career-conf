/* eslint-disable @next/next/no-img-element */
// components/ImageComponent.js

const ImageComponent = ({ imgUrl, personName, Type, size }) => {
  const imageSize =
    size === "large"
      ? "md:w-[16vw] w-[10rem] md:h-[16vw] h-[10rem]"
      : "md:w-[14vw] w-[10rem] md:h-[14vw] w-[10rem]";
  const handleError = (e) => {
    e.target.src = "bg-placeholder.png";
  };
  return (
    <div className="relative md:hover:shadow-image md:border-0 border border-gray-700">
      <div className="aspect-square">
        <img src="/stars.png" alt="" className="absolute inset-0 -z-10" />
        <img
          src={imgUrl}
          onError={handleError}
          alt={personName}
          className={`${imageSize} object-cover rounded-md aspect-square `}
        />
      </div>

      <div className="md:absolute md:top-[40%] md:-right-[20%]  text-white text-center p-2 bg-opacity-50 md:border-0 border-t border-gray-700">
        <div className="flex md:flex-col items-start flex-row md:gap-0 gap-2">
          {personName.split(" ").map((item) => (
            <p
              key={item}
              className={`${
                size === "large"
                  ? "md:text-xl text-base "
                  : "md:text-base text-sm"
              }} text-left `}
            >
              {item}
            </p>
          ))}
        </div>

        <p
          className={`${
            size === "large" ? "md:text-base text-xs" : "md:text-sm text-xs"
          } border-red-500 text-left border-2 border-l-0 border-r-0 border-b-0`}
        >
          {Type}
        </p>
      </div>
    </div>
  );
};

export default ImageComponent;
