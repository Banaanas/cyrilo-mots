import styled from "@emotion/styled";
import React from "react";

import appTheme from "../../../../styles/appTheme";
import Loader from "../../../Common/Loader";
import { LoginButton } from "../LoginButton/LoginButton.styles";

const ButtonText = styled.span`
  margin: 0 8px;
`;

const LoginFormButton = ({ isLoading }: LoginButtonProps) => {
  return (
    <LoginButton type="submit" disabled={isLoading}>
      <span role="img" aria-hidden="true">
        ✨
      </span>

      {isLoading ? (
        <Loader
          size="21px"
          width="2px"
          color={appTheme.colors.secondary["400"]}
        />
      ) : (
        <ButtonText>Magic Link</ButtonText>
      )}

      <span role="img" aria-hidden="true">
        ✨
      </span>
    </LoginButton>
  );
};

export default LoginFormButton;

interface LoginButtonProps {
  isLoading: boolean;
}
