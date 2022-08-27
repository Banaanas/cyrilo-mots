import styled from "@emotion/styled";
import { AlertOctagon as AlertIcon } from "react-feather";

import appTheme from "../../../../styles/appTheme";

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  max-width: 250px;
  padding: 4px 8px;
  color: ${appTheme.colors.secondary["500"]};
  font-weight: ${appTheme.fontWeight.bold};
  text-align: left;
  border-radius: 2px;
`;

const LoginFormError = ({ text }: LoginErrorProps) => {
  if (!text) return null;
  return (
    <Paragraph>
      <AlertIcon size="48px" />
      <span>{text}</span>
    </Paragraph>
  );
};

export default LoginFormError;

interface LoginErrorProps {
  text: string | undefined;
}
