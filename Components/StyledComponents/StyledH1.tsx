import styled from "@emotion/styled";

import appTheme from "../../styles/appTheme";

const StyledH1 = styled.h1`
  color: ${appTheme.colors.tertiary["500"]};
  font-weight: ${appTheme.fontWeight.bold};
  font-size: clamp(18px, 5vw, 36px);
  font-weight: ${appTheme.fontWeight.bold};
  font-family: ${appTheme.fontFamily.montserrat},
    ${appTheme.fontFamily.alternativeFonts};
  line-height: 0.8;
  letter-spacing: 2px;
  text-align: center;
`;

export default StyledH1;
