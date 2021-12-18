import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.a`
  display: flex;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  font-weight: 600;
  color: black;
  text-decoration: none;
  &::after {
    content: "";
    position: absolute;
    top: 40px;
    width: 256px;
    height: 0.1em;
    background-color: #1b998b;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }
  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
  &:active {
    color: black;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  color: #000000;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 22px;
  border-radius: 25px;
  width: 120px;
  transition: background-color 1s, transform 0.5s;

  &:hover {
    background-color: #1b998b;
    color: #ffffff;
    font-size: 23px;
    font-weight: 500;
    transform: scale(1.1);
  }
  &:active {
    color: #000000;
  }

  @media screen and (max-width: 900px) {
    font-size: 15px;
    margin-right: 0;
    &:hover {
      background-color: #1b998b;
      color: #ffffff;
      font-size: 16px;
      font-weight: 500;
      transform: scale(1.1);
    }
  }
`;
export const A = styled.a`
  color: #000000;
  padding: 0 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
      color: #1b998b;
      font-size: 16px;
      font-weight: 500;
      transform: scale(1.1);
    }
    &:active {
      color: #000000;
    }
`;
