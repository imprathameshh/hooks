import React, { useContext } from "react";
import { nameData, genderData } from "../App";

const ChildC = () => {
  const name = useContext(nameData);
  const gender = useContext(genderData);
  return (
    <>
      <h3>
        My name is {name} and my gender is {gender}
      </h3>
    </>
  );
};

export default ChildC;
