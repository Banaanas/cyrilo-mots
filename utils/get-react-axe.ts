import React from "react";
import ReactDOM from "react-dom";

const getReactAxe = async () => {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const reactAxe = await import("@axe-core/react");
  return reactAxe.default(React, ReactDOM, 1000);
};

export default getReactAxe;
