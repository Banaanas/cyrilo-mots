import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

const Container = styled.div<{ maxWidth: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const MaxWidthWrapper = ({
  maxWidth,
  style,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <Container maxWidth={maxWidth} style={style}>
      {children}
    </Container>
  );
};

interface MaxWidthWrapperProps {
  maxWidth: string;
  style?: CSSProperties;
  children: ReactNode;
}
