import styled from "styled-components";

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 700;
  margin: 0;
  transition: text-shadow 1s, transform 0.5s;

  &:hover {
    text-shadow: 2px 2px 5px #1b998b;
    transform: scale(1.1);
  }
  @media screen and (max-width: 900px) {
    font-size: 70px;
  }
  @media screen and (max-width: 321px) {
    font-size: 50px;
  }
`;

export const SubTitle = styled.h2`
  font-size:  ${props => props.fontSize ? props.fontSize : "30px"};
  margin: 0;
  font-weight: 500;
  text-align: center;
  &:hover {
    span {
      transition: color 0.3s;
      color: #1b998b;
    }
  }
`;

export const SubSubTitle = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: 400;
`;
export const Paragraph = styled.p`
  font-size: ${props => props.fontSize ? props.fontSize : "18px"};
  text-align: ${props => props.textAlign ? props.textAlign : "justify"};
  &>span {
    color: #1b998b;
  }
`;
export const ProjectName = styled.h3`
  font-size: 25px;
  margin: ${props => props.margin ? props.margin : "25px 0"};
`;
