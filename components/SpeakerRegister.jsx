import React from "react";
import TitleDescription from "./titleDescription";
import BgHeader from "./BgHeader";

const SpeakerRegister = () => {
  return (
    <div>
      <BgHeader bgHeader={"SPEAKER"} header={"REGISTER AS SPEAKER"} />
      <TitleDescription
        description={
          "Ready to share your insights and inspire the next generation of developers? Join us as a speaker and be part of a day dedicated to career exploration. Register now!"
        }
        buttonLabel={"REGISTER SPKEAKER"}
      />
    </div>
  );
};

export default SpeakerRegister;
