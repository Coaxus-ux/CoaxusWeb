import React from "react";
import { ProjectContainer } from "../../styles/Layout";

import { ProjectName, Paragraph } from "../../styles/Texts";
import { A } from "../../styles/Buttons";

import { AiOutlineGithub } from "react-icons/ai";
import { SiMinetest } from "react-icons/si";
const ListProjects = () => {
  return (
    <>
      <ProjectContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <ProjectName>Rick and Morty Wiki</ProjectName>
        <Paragraph>
          Using the rick and morty API I decided to create a mini wiki of the
          series using <span> React </span>, <span>Axios </span>,{" "}
          <span>React router </span>, <span>Styled components </span> and{" "}
          <span>React icons</span>. On the web we can find all the characters of
          the series, besides being able to interact and see more about them by
          clicking on their card, we can also navigate through different planets
          that exist in the series and likewise by clicking on them we can see
          all its inhabitants. I invite you to visit the web if you like the
          series.
        </Paragraph>
        <div>
          <A href="https://github.com/Coaxus-ux/Rick-And-Morty" target="_blank">
            <AiOutlineGithub /> Source
          </A>
          <A href="https://jovial-hugle-e097ca.netlify.app/" target="_blank">
            <SiMinetest /> Demo
          </A>
        </div>
      </ProjectContainer>

      <ProjectContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <ProjectName>PHP Inventories</ProjectName>
        <Paragraph>
          Using <span>PHP</span>, <span>Mysql</span>, <span>Tailwind</span> and{" "}
          <span>DaisyIU</span> create a whole inventory system, this has two
          parts which are normal users and administrators, in addition to each
          role have different options. The users can buy products and sell them,
          generate reports in pdf and excel. [In the demo section you can only
          find pictures, hosting issue I decided better not to create a demo as
          such].
        </Paragraph>
        <div>
          <A href="https://github.com/Coaxus-ux/php-page" target="_blank">
            <AiOutlineGithub /> Source
          </A>
          <A
            href="https://drive.google.com/drive/folders/1mF90Eb408n9KizSwMcHbolAaSXUPWgtj?usp=sharing"
            target="_blank"
          >
            <SiMinetest /> Demo
          </A>
        </div>
      </ProjectContainer>

      <ProjectContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <ProjectName>Anime random</ProjectName>
        <Paragraph>
          Using only <span>Javascript</span>, <span>HTML</span> and{" "}
          <span>CSS</span> I created a site in which it recommends you a random
          anime every time you enter, besides giving you a little information
          about it.
        </Paragraph>
        <div>
          <A href="https://github.com/Coaxus-ux/Random-Anime" target="_blank">
            <AiOutlineGithub /> Source
          </A>
          <A href="https://coaxus-ux.github.io/Random-Anime/" target="_blank">
            <SiMinetest /> Demo
          </A>
        </div>
      </ProjectContainer>

      <ProjectContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        <ProjectName>Hospital schedules</ProjectName>
        <Paragraph>
          Using <span>PHP</span>, <span>Mysql</span>, <span>Tailwind</span> and
          <span> DaisyIU</span> develop a web application which resembles a
          hospital appointment and scheduling system. This may be of: Register
          User, add medical appointments, add specialties, Assing Medical
          Appointments, Create Medical Appointments, Create and assing schedules
          to users, Check that medical appointments do not cross over, Check for repeat users
        </Paragraph>
        <div>
          <A href="https://github.com/Coaxus-ux/Hospital-horarios" target="_blank">
            <AiOutlineGithub /> Source
          </A>
          <A href="https://drive.google.com/drive/folders/13m9ZMlcbD82TW9b6Z31hc4zeKcW7q-85" target="_blank">
            <SiMinetest /> Demo
          </A>
        </div>
      </ProjectContainer>
    </>
  );
};

export default ListProjects;
