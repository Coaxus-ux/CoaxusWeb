import React from "react";

import { IconContainer, SkillContainer } from "../../styles/Layout";
import { SubSubTitle } from "../../styles/Texts";

import { AiOutlineGithub } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { FaPython, FaJava, FaCss3Alt, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPostgresql, SiHtml5, SiTailwindcss, SiFramer } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import {DiPhp} from 'react-icons/di'
const SkillIcons = () => {
  return (
    <>
    <br/>
      <SubSubTitle>My Skills</SubSubTitle>
      <SkillContainer>
        <IconContainer>
          <CgFigma className="icon" />
          <p>Figma</p>
        </IconContainer>

        <IconContainer>
          <FaPython className="icon" />
          <p>Python</p>
        </IconContainer>

        <IconContainer>
          <FaJava className="icon" />
          <p>Java</p>
        </IconContainer>

        <IconContainer>
          <IoLogoJavascript className="icon" />
          <p>Javascript</p>
        </IconContainer>

        <IconContainer>
          <GrMysql className="icon" />
          <p>MySQL</p>
        </IconContainer>

        <IconContainer>
          <SiPostgresql className="icon" />
          <p>Postgresql</p>
        </IconContainer>

        <IconContainer>
          <FaCss3Alt className="icon" />
          <p>CSS</p>
        </IconContainer>

        <IconContainer>
          <SiHtml5 className="icon" />
          <p>HTML</p>
        </IconContainer>

        <IconContainer>
          <FaLinux className="icon" />
          <p>Linux</p>
        </IconContainer>

        <IconContainer>
          <SiTailwindcss className="icon" />
          <p>Tailwindcss</p>
        </IconContainer>

        <IconContainer>
          <SiFramer className="icon" />
          <p>Framer</p>
        </IconContainer>
        <IconContainer>
          <AiOutlineGithub className="icon" />
          <p>Github</p>
        </IconContainer>
        <IconContainer>
          <DiPhp className="icon" />
          <p>PHP</p>
        </IconContainer>

      </SkillContainer>
    </>
  );
};
export default SkillIcons;
