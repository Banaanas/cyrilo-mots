import styled from "@emotion/styled";
import React from "react";

import appTheme from "../../../styles/appTheme";
import LoginForm from "./LoginForm/LoginForm";
import LoginGitHub from "./LoginGithub/LoginGitHub";
import LoginSeparator from "./LoginSeparator";
import NoNewSignUpMessage from "./NoNewSignUpMessage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: clamp(24px, 20vw, 40px);
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 4px;
  padding: 48px;
`;

const TitleAndMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  min-width: 300px;
`;

const TitleH1 = styled.h1`
  max-width: 400px;
  color: ${appTheme.colors.tertiary["500"]};
  font-weight: ${appTheme.fontWeight.bold};
  font-size: clamp(24px, 5vw, 36px);
  font-weight: ${appTheme.fontWeight.bold};
  font-family: ${appTheme.fontFamily.montserrat},
    ${appTheme.fontFamily.alternativeFonts};
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
`;

const LoginSection = () => {
  return (
    <Container>
      <TitleAndMessageContainer>
        <TitleH1>Accéder à ma liste de mots</TitleH1>
        <NoNewSignUpMessage />
      </TitleAndMessageContainer>
      <LoginContainer>
        <LoginGitHub />
        <LoginSeparator />
        <LoginForm />
      </LoginContainer>
    </Container>
  );
};

export default LoginSection;
