import styled from "@emotion/styled";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Search as SearchIcon, X as CrossIcon } from "react-feather";

import appTheme from "../../styles/appTheme";
import { focusWithinStyle } from "../../styles/css-composition";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
`;

export const Label = styled(LabelPrimitive.Root)`
  display: flex;
  column-gap: 4px;
  padding: 4px 8px;
  background: ${appTheme.colors.white};
  border-radius: 4px;
  user-select: none;

  ${focusWithinStyle};
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const StyledSearchIcon = styled(SearchIcon)<{ hidden: boolean }>`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

export const StyledCrossIcon = styled(CrossIcon)<{ hidden: boolean }>`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

export const Input = styled.input`
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: transparent;
`;

export const SearchErrorText = styled.span`
  color: ${appTheme.colors.secondary["500"]};
  font-weight: ${appTheme.fontWeight.bold};
  text-align: center;
  border-radius: 2px;
`;
