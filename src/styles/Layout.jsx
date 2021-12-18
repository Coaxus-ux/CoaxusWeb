import styled from "styled-components";
import { motion } from "framer-motion";
export const HeaderContainer = styled.header`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 10px;
`;
export const FatherContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const SonContainer = styled.div`
  display: flex;
  padding: 20px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  margin-right: 13px;
  @media screen and (max-width: 900px) {
    flex-direction: row;
    margin-right: 0;
    align-items: center;
    justify-content: center;
  }
`;
export const BioContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.9fr 1.1fr;
  gap: 0px 0px;
  grid-template-areas:
    "TitleContainer PhotoContainer"
    "MeContainer MeContainer";
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "TitleContainer "
      "PhotoContainer"
      "MeContainer";
  }
`;
export const ProjectsContainer = styled(motion.div)`
  width: 100%;
`;

export const TitleContainer = styled.div`
  grid-area: TitleContainer;
`;
export const PhotoContainer = styled.div`
  grid-area: PhotoContainer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MeContainer = styled.div`
  margin: -120px 30px 0 0;
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-area: MeContainer;
  padding: 2rem calc((100vw - 1000px) / 5);

  div:first-child {
    margin-right: 50px;
    width: 2000px;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0 0 0;
    flex-direction: column;
    div:first-child {
      width: 100%;
      margin-right: 0;
    }
  }
`;
export const SliderContainer = styled.div`
  margin: 10px 0 20px 10px;
  height: 50px;
`;
export const Img = styled.img`
  border-radius: 50%;
  width: 340px;
  height: 340px;
  @media screen and (max-width: 500px) {
    width: 240px;
    height: 240px;
  }
`;
export const MyHistory = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    text-align: center;
  } ;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px;
  margin: 5px;
  & > p {
    margin: 0;
  }
`;
export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0 20px 0;
`;
export const ProjectContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 20px;
  padding: 20px;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  } 
`;
export const FindmeFather = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  // media queries
  @media screen and (max-width: 670px) {
    flex-direction: column;
  }
`;
export const FindMeContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;

`;
