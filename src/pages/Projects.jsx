import React from "react";

import { ProjectsContainer } from "../styles/Layout";
import { InitialEffect } from "../styles/Animations";

import ListProjects from "../components/projects/ListProjects";
const Projects = () => {
  return (
    <ProjectsContainer
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={InitialEffect}
      transition={{ duration: 0.5, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <ListProjects />
      
    </ProjectsContainer>
  );
};

export default Projects;
