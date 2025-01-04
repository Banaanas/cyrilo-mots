import styled from "@emotion/styled";

import { appTheme } from "../../../../styles/appTheme";
import { Loader } from "../../../Common/Loader";
import { LoginButton } from "../LoginButton/LoginButton.styles";

const ButtonText = styled.span`
  margin: 0 8px;
`;

export const LoginFormButton = ({ isLoading }: LoginButtonProps) => {
  return (
    <LoginButton
      type="submit"
      disabled={isLoading}
      data-test="login-form-button"
    >
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
        <ButtonText>Me connecter</ButtonText>
      )}

      <span role="img" aria-hidden="true">
        ✨
      </span>
    </LoginButton>
  );
};

interface LoginButtonProps {
  isLoading: boolean;
}
