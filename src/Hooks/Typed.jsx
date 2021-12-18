import React from "react";
import Typical from "react-typical";

const Typed = () => {
  return (
    <Typical
      steps={["JULIAN TRUJILLO", 1000, "COAXUS", 1000]}
      loop={Infinity}
      wrapper="p"
    />
  );
};

export default Typed;
