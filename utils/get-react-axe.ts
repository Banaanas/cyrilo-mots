import React from "react";
import ReactDOM from "react-dom";

export const getReactAxe = async () => {
  const reactAxe = await import("@axe-core/react");
  return reactAxe.default(React, ReactDOM, 1000);
};
