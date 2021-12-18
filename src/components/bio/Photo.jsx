import React from "react";

import { PhotoContainer, Img } from "../../styles/Layout";
import { SubTitle } from "../../styles/Texts";

import Type from "../../Hooks/Typed";

import MyPhoto from "../../me.jpg";

const Photo = () => {
  return (
    <PhotoContainer>
      <Img
        alt="Me"
        src={MyPhoto}
      />
      <br />
      <SubTitle> <Type/> </SubTitle>
    </PhotoContainer>
  );
};

export default Photo;
