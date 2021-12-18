import React from "react";
import SkillIcons from "./SkillIcons";

import { TitleContainer, SliderContainer } from "../../styles/Layout";
import { Title, SubTitle, SubSubTitle } from "../../styles/Texts";

import Slider from "../../Hooks/Slider";

const Me = () => {
  return (
    <TitleContainer>
      <br />
      <Title>Web Developer</Title>
      <SubTitle>
        Hello, my name is <span> Julian Trujillo</span>
      </SubTitle>
      <br />
      <SubSubTitle>My secrets</SubSubTitle>
      <SliderContainer>
        <Slider
          carouselItems={[
            <div>I really enjoy learning new things</div>,
            <div>I love H.P. Lovecraft.</div>,
            <div>
              I want to travel all over the world, without worrying about
              anything, just to the love of my life.
            </div>,
            <div>
              I want to achieve great things in my life, to be remembered as
              someone who did many beautiful things.
            </div>,
            <div>
              I don't like stereotypes, I find it absurd to see people from such
              a basic point of view.
            </div>,
            <div>I am a parrot lover</div>,
          ]}
        />
      </SliderContainer>
      <SkillIcons />
    </TitleContainer>
  );
};

export default Me;
