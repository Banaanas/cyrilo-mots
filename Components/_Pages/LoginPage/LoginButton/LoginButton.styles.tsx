import styled from "@emotion/styled";

import { appTheme } from "../../../../styles/appTheme";

export const LoginButton = styled.button`
  all: unset;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  width: 100%;
  padding: 8px 0;
  color: ${appTheme.colors.white};
  font-weight: ${appTheme.fontWeight.bold};
  font-family:
    ${appTheme.fontFamily.montserrat}, ${appTheme.fontFamily.alternativeFonts};
  cursor: pointer;
  isolation: isolate;

  ::after {
    position: absolute;
    z-index: -1;
    inset: 0 0;
    width: 100%;
    height: 100%;
    background-color: ${appTheme.colors.tertiary["900"]};
    border-radius: 4px;
    transform: scale(1);
    transition: transform 250ms ease-out;
    content: "";
  }

  :hover::after {
    transform: scale(1.05);
  }

  :disabled::after {
    background-color: ${appTheme.colors.primary["700"]};
    cursor: not-allowed;
  }
`;
