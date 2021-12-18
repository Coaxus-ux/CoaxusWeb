import React from "react";


import MyName from "../components/bio/MyName";
import AboutMe from "../components/bio/AboutMe";
import Photo from "../components/bio/Photo";

import { InitialEffect } from '../styles/Animations';
import { BioContainer } from "../styles/Layout";


const Bio = () => {
  return (
    <BioContainer
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={InitialEffect}
      transition={{ duration: 0.5, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <MyName />
      <Photo />
      <AboutMe />
    </BioContainer>
  );
};

export default Bio;
