import styled from "@emotion/styled";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import appTheme from "../../../styles/appTheme";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
  width: 100%;
  padding: 8px 8px;
  background: ${appTheme.colors.tertiary["500"]};

  @media ${appTheme.queries.desktopAndUp} {
    padding: 12px 80px 24px 80px;
  }
`;

export const SubHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;

  @media ${appTheme.queries.desktopAndUp} {
    display: flex;
    justify-content: end;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  color: ${appTheme.colors.white};
  font-family: ${appTheme.fontFamily.montserrat},
    ${appTheme.fontFamily.alternativeFonts};
  font-size: ${appTheme.fontSize.xl};
  font-weight: ${appTheme.fontWeight.bold};

  @media ${appTheme.queries.tabletAndUp} {
    font-size: ${appTheme.fontSize.xl2};
  }
`;

export const SubHeaderLink = styled.a<{ lightColor?: boolean }>`
  position: relative;
  padding: 8px;
  color: ${({ lightColor }) =>
    lightColor ? appTheme.colors.black : appTheme.colors.white};
  background: ${({ lightColor }) =>
    lightColor
      ? appTheme.colors.tertiary["100"]
      : appTheme.colors.tertiary["800"]};
  font-family: ${appTheme.fontFamily.montserrat},
    ${appTheme.fontFamily.alternativeFonts};
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
    background-color: ${({ lightColor }) =>
      lightColor
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

export const Separator = styled(SeparatorPrimitive.Root)`
  width: 100%;
  height: 1px;
  margin-top: 8px;
  margin-bottom: 24px;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${appTheme.colors.white} 50%,
    transparent 100%
  );
  border-radius: 2px;

  @media ${appTheme.queries.desktopAndUp} {
    display: none;
  }
`;
