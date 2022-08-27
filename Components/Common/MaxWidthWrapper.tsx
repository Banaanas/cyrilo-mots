import styled from "@emotion/styled";
import React from "react";

const Container = styled.div<{ maxWidth: string }>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

const MaxWidthWrapper = ({
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

export default MaxWidthWrapper;

interface MaxWidthWrapperProps {
  maxWidth: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}
