import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { appTheme } from "../../styles/appTheme";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<{ size?: string; width?: string; color?: string }>`
  position: relative;
  width: ${({ size }) => size || "96px"};
  height: ${({ size }) => size || "96px"};
  border-style: solid;
  border-width: ${({ width }) => width || "10px"};
  border-color: ${appTheme.colors.white};
  border-left-color: ${({ color }) =>
    color || appTheme.colors.secondary["500"]};
  border-radius: 50%;
  transform: translateZ(0);
  animation: ${rotateAnimation} 0.75s infinite linear;
`;

export const Loader = ({ size, width, color }: LoaderProps) => {
  return <Container size={size} width={width} color={color} />;
};

interface LoaderProps {
  size?: string;
  width?: string;
  color?: string;
}
