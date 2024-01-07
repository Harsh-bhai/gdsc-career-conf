import React from "react";

const BgHeader = ({ header, bgHeader }) => {
  return (
    <div className="w-full overflow-hidden relative flex flex-col justify-center items-center">
      <div className="text-[19vw] text-center font-garalama text-black z-0 heading-outline">
        {bgHeader}
      </div>
      <div className="absolute font-garalama text-2xl md:text-7xl z-10">
        {header}
      </div>
    </div>
  );
};

export default BgHeader;
