import styled from "@emotion/styled";
import NextLink from "next/link";
import { Home as HomeIcon } from "react-feather";

import { navLinks } from "../../../data/navlinks";
import { appTheme } from "../../../styles/appTheme";
import { StyledErrorPagesContainer } from "../../StyledComponents/StyledErrorPagesContainer";
import { StyledH1 } from "../../StyledComponents/StyledH1";
import { StyledPageMain } from "../../StyledComponents/StyledPageMain";

const StyledNextLink = styled(NextLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  color: ${appTheme.colors.white};
  background-color: ${appTheme.colors.tertiary["500"]};
  padding: 4px 8px;
  font-weight: ${appTheme.fontWeight.bold};
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;

  ::after {
    position: absolute;
    z-index: -1;
    inset: 0 0;
    width: 100%;
    height: 100%;
    background-color: ${appTheme.colors.primary["900"]};
    opacity: 0;
    transition: opacity 250ms ease-out;
    content: "";
  }

  :hover::after {
    opacity: 1;
  }
`;

export const ErrorPage = ({ errorCode }: ErrorPageProps) => {
  return (
    <StyledPageMain>
      <StyledErrorPagesContainer>
        <StyledH1>Error {errorCode}</StyledH1>
        <StyledNextLink href={navLinks.home.href}>
          <span>Accueil</span>
          <HomeIcon size="16px" />
        </StyledNextLink>
      </StyledErrorPagesContainer>
    </StyledPageMain>
  );
};

interface ErrorPageProps {
  errorCode: "404" | "500";
}
