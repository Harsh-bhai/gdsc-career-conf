// components/ImageComponent.js

const ImageComponent = ({ imgUrl, personName,Type,className }) => {
    return (
      <div className={`relative ${className}`}>
     
        <div className="absolute  top-[82%] right-[25%] text-white text-center p-2 bg-opacity-50 ">
          <p className="md:text-sm text-xs">{personName}</p>
          <p className="md:text-xs  border-2 border-l-0 border-r-0 border-b-0">{Type}</p>
        </div>
        <img src={imgUrl} alt={personName} className="md:w-40 md:h-40 w-20 h-20 object-cover shadow-custom-purple rounded-xl " />
        </div>
      
    );
  };
  
  export default ImageComponent;
  