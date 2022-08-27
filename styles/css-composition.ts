import { css } from "@emotion/react";

import appTheme from "./appTheme";

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
