import React from "react";
import SocialMedia from "../components/findMe/SocialMedia";
import { ProjectsContainer } from "../styles/Layout";
import { InitialEffect } from "../styles/Animations";

const FindMe = () => {
  return (
    <ProjectsContainer
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={InitialEffect}
      transition={{ duration: 0.5, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <SocialMedia />
    </ProjectsContainer>
  );
};

export default FindMe;
