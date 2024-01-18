import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen text-white">
      <div className="pt-20 h-full">
        <iframe
          src="https://konfhub.com/widget/gdsc-careerconf?desc=true"
          id="konfhub-widget"
          title="Register for GDSC CareerConf"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
