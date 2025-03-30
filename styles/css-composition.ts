import { css } from "@emotion/react";

import { appTheme } from "./appTheme";

export const focusStyle = css`
  :focus {
    outline: none;
  }

  :focus-visible {
    outline: ${appTheme.colors.secondary["500"]} 4px dashed;
    outline-offset: 4px;
  }
`;

export const focusWithinStyle = css`
  :focus {
    outline: none;
  }

  :focus-within {
    outline: ${appTheme.colors.secondary["500"]} 4px dashed;
    outline-offset: 4px;
  }
`;

// Function built upon Emotion CSS Prop - Use of lightColor prop was needed (doable only with a function)
export const headerLinkButtonStyle = ({
  color,
}: {
  color?: "light" | "dark";
}) => css`
  position: relative;
  padding: 8px;
  color: ${color === "light" ? appTheme.colors.black : appTheme.colors.white};

  background: ${color === "light"
    ? appTheme.colors.tertiary["100"]
    : appTheme.colors.tertiary["800"]};
  font-family:
    ${appTheme.fontFamily.montserrat}, ${appTheme.fontFamily.alternativeFonts};
  font-size: ${appTheme.fontSize.sm};
  font-weight: ${appTheme.fontWeight.bold};
  text-decoration: none;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  isolation: isolate;

  ::after {
    position: absolute;
    z-index: -1;
    inset: 0 0;
    width: 100%;
    height: 100%;
    background-color: ${color === "light"
      ? appTheme.colors.tertiary["200"]
      : appTheme.colors.tertiary["300"]};
    opacity: 0;
    transition: opacity 250ms ease-out;
    content: "";
  }

  :hover {
    font-weight: ${appTheme.fontWeight.bold};
  }

  :hover::after {
    opacity: 1;
  }
`;
