import styled from "@emotion/styled";
import React from "react";

import StyledH1 from "../../StyledComponents/StyledH1";
import LoginForm from "./LoginForm/LoginForm";
import LoginGitHub from "./LoginGithub/LoginGitHub";
import LoginSeparator from "./LoginSeparator";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: clamp(24px, 20vw, 96px);
  margin-top: clamp(18px, 20vw, 200px);
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 4px;
  padding: 48px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 24px;
  min-width: 300px;
`;

const LoginSection = () => {
  return (
    <Container>
      <StyledH1>Accéder à ma liste de mots</StyledH1>
      <LoginContainer>
        <LoginGitHub />
        <LoginSeparator />
        <LoginForm />
      </LoginContainer>
    </Container>
  );
};

export default LoginSection;
