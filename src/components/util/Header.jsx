import React from "react";
import { HeaderContainer } from "../../styles/Layout";
import { Button } from "../../styles/Buttons";
import { UilFileSearchAlt } from "@iconscout/react-unicons";
const Header = () => {
  return (
    <HeaderContainer>
      <Button
        href="https://drive.google.com/uc?id=1V0gnipWMXI36bbFhG2q8SaouiCGmqCol&export=download&authuser=0"
        target="_blank"
      >
        <span> Download my resume here </span>
        <UilFileSearchAlt style={{ marginLeft: "10px" }} />
      </Button>
    </HeaderContainer>
  );
};
export default Header;
