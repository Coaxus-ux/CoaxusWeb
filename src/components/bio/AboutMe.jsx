import React from "react";

import { MeContainer, MyHistory } from "../../styles/Layout";

import { SubTitle, Paragraph } from "../../styles/Texts";

const AboutMe = () => {
  return (
    <MeContainer>
      <div>
        <SubTitle fontSize="50px">
          WHO AM I<span>?</span>
        </SubTitle>
      </div>
      <MyHistory>
        <Paragraph>
          My story begins in the year 2000, to be exact on January 24, 2000, I
          was born like any other kid, but well, that's not important now. My
          real story starts in the year 2013 when I fell deeply in love with a
          game called <span> Minecraft </span>, the computer I had at that time
          was not able to run the game, so for the first time I started
          programming with something as simple as XML files, after that I
          started creating mini mods and experimenting. With that I met the
          batch language, in an old book I found in my sister's room, that's
          when I programmed from scratch my first script, at 14 years old for
          the first time I had the ecstasy of running a script that the only
          thing I did was a <span> "hello world"</span>. After that I
          experimented with C, C++, Java and even Python, I called my attention
          to computer security and at 16 years old I discovered that the
          <span> Play Station 4 had a bug </span> with the main accounts,
          allowing to have many main accounts, since the accounts that we could
          have as main accounts were limited and with this were infinite and
          also enjoyed the benefits.
          <br />
          When I was 19 years old I started studying
          <span> software engineering </span>at the South Colombian University.
          A semester later <span> I founded the cybersecurity </span> research
          hotbed since I still liked the world of computer security, but in that
          I could not take advantage of everything I liked, so in the end I
          decided to also learn  <span> web development </span> and so I could design, enjoy the
          whole world of design with the front-end, but also enjoying my
          greatest passion, programming. And that's it, that's me, nobody and
          everything at the same time.
        </Paragraph>
      </MyHistory>
    </MeContainer>
  );
};

export default AboutMe;
