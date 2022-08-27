import styled from "@emotion/styled";

import appTheme from "../../styles/appTheme";

// Framer Motion Div
const StyledPageMain = styled.main<StyledPageMainProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "space-around"};
  width: 100%;
  max-width: ${appTheme.globalMaxWidth};
  min-height: 100%;
  padding: 16px;
  text-align: justify;
`;

export default StyledPageMain;

interface StyledPageMainProps {
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}
