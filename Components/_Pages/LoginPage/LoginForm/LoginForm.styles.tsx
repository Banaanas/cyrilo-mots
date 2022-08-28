import styled from "@emotion/styled";
import * as LabelPrimitive from "@radix-ui/react-label";

import appTheme from "../../../../styles/appTheme";
import { focusStyle } from "../../../../styles/css-composition";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 4px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  width: 100%;
`;

export const Label = styled(LabelPrimitive.Root)`
  display: flex;
  align-items: center;
  justify-content: left;
  column-gap: 8px;
  user-select: none;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 4px;
  width: 100%;

  ${focusStyle};

  :focus-visible {
    outline-color: ${appTheme.colors.tertiary["500"]};
    outline-offset: 2px;
  }
`;
