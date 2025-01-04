import styled from "@emotion/styled";

import { appTheme } from "../../styles/appTheme";

export const WordDefinitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 16px;
  color: ${appTheme.colors.black};

  // First descendent lists - Except the first one
  & > * + li {
    margin-top: 24px;
  }

  // First descendent lists
  & > li {
    width: 100%;

    ::marker {
      margin: 160px;
      color: ${appTheme.colors.primary["900"]};
      font-size: 8px;
      content: "▶ ";
      padding: 48px;
    }

    // Nested lists
    li {
      ::marker {
        content: "✓ ";
        font-size: 4px;
      }
  }

 

  // Links inside Word Definition
  a {
    color: ${appTheme.colors.tertiary["900"]};

    :hover {
      color: ${appTheme.colors.secondary["900"]};
    }
  }
`;

export const WordDefinitionErrorText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  padding: 4px 8px;
  background-color: ${appTheme.colors.secondary["500"]};
  color: ${appTheme.colors.tertiary["900"]};
  border-radius: 2px;
`;
