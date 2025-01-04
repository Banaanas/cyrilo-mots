import styled from "@emotion/styled";

import { appTheme } from "../../../styles/appTheme";

const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${appTheme.colors.tertiary["300"]};
  font-weight: ${appTheme.fontWeight.bold};

  ::before,
  ::after {
    display: inline-block;
    width: 100%;
    height: 2.5px;
    content: "";
  }

  ::before {
    margin-right: 8px;
    background: linear-gradient(
      to right,
      transparent,
      ${appTheme.colors.tertiary["200"]}
    );
  }

  ::after {
    margin-left: 8px;
    background: linear-gradient(
      to left,
      transparent,
      ${appTheme.colors.tertiary["200"]}
    );
  }
`;

export const LoginSeparator = () => {
  return <Separator>ou</Separator>;
};
