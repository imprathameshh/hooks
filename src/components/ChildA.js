import React, { memo } from "react";

const ChildA = ({ Learning }) => {
  console.log("Child Components");

  return <div></div>;
};

export default memo(ChildA);
