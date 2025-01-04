import styled from "@emotion/styled";

import { appTheme } from "../../../styles/appTheme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.p`
  all: unset;
  color: ${appTheme.colors.tertiary["300"]};
  font-weight: ${appTheme.fontWeight.bold};
  font-style: italic;
  text-align: center;
`;

export const NoNewSignUpMessage = () => {
  return (
    <Container>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Paragraph>Les inscriptions sont closes jusqu'à nouvel ordre.</Paragraph>
      <Paragraph>Registrations are closed for now.</Paragraph>
    </Container>
  );
};
