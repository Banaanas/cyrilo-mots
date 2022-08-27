import styled from "@emotion/styled";
import { Info as InfoIcon } from "react-feather";

import appTheme from "../../../../styles/appTheme";

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  max-width: 250px;
  padding: 4px 8px;
  color: ${appTheme.colors.primary["900"]};
  font-weight: ${appTheme.fontWeight.bold};
  text-align: left;
  border-radius: 2px;
`;

const LoginFormSuccess = () => {
  return (
    <Paragraph>
      <InfoIcon size="48px" />
      <span>Veuillez consulter votre courriel pour vous connecter.</span>
    </Paragraph>
  );
};

export default LoginFormSuccess;
