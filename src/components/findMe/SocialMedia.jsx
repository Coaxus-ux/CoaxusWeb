import React from "react";
import { SiTiktok, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
import {FaWind} from "react-icons/fa";
import { ProjectName, Paragraph } from "../../styles/Texts";
import { FindMeContainer, FindmeFather } from "../../styles/Layout";


import { A } from "../../styles/Buttons";
const SocialMedia = () => {
  return (
    <FindmeFather>
      <FindMeContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <SiTiktok />
        <ProjectName margin="0">Tiktok</ProjectName>
        <Paragraph textAlign="center">
          A little bit of me explaining and teaching programming
        </Paragraph>
        <A>Go &nbsp; <FaWind/> </A>
      </FindMeContainer>
      <FindMeContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <SiInstagram />

        <ProjectName margin="0">Instagram</ProjectName>
        <Paragraph textAlign="center">Infographics about programming and more about me</Paragraph>
        <A>Go &nbsp; <FaWind/> </A>
      </FindMeContainer>
      <FindMeContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <SiGithub />

        <ProjectName margin="0">Github</ProjectName>
        <Paragraph textAlign="center">
          My special corner, you can see if you like any of them.
        </Paragraph>
        <A>Go &nbsp; <FaWind/> </A>
      </FindMeContainer>
      <FindMeContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <SiLinkedin />

        <ProjectName margin="0">Linkedin</ProjectName>
        <Paragraph textAlign="center">
          Here you can see all my achievements and projects
        </Paragraph>
        <A>Go &nbsp; <FaWind/> </A>
      </FindMeContainer>
    </FindmeFather>
  );
};

export default SocialMedia;
