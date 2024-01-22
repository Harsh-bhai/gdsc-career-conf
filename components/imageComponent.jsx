/* eslint-disable @next/next/no-img-element */
// components/ImageComponent.js

const ImageComponent = ({ imgUrl, personName,Type }) => {
    return (
      <div className={`relative`}>
     
        <div className="absolute  top-[40%] -right-[20%] text-white text-center p-2 bg-opacity-50 ">
          {personName.split(" ").map((item)=>{
            return <p key={item} className="md:text-sm text-left text-xxs">{item}</p>
          })}
          <p className="md:text-xs  text-3xs border-red-500 text-left border-2 border-l-0 border-r-0 border-b-0">{Type}</p>
        </div>
        <img src="/stars.png" alt="" className="absolute inset-0 -z-10"/>
        <img src={imgUrl} alt={personName} className="md:w-[16rem] md:h-[16rem] w-[8rem] h-[8rem] object-cover shadow-2xl rounded-md " />
        </div>
      
    );
  };
  
  export default ImageComponent;
  