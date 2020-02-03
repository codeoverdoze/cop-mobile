import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

// components
import { StyledHeaderInverse } from "./Typography";

function ParentScreenHeader({ title, children }) {
  return (
    <Container>
      {children ? children : <StyledHeaderInverse>{title}</StyledHeaderInverse>}
    </Container>
  );
}

const Container = styled.View`
  background-color: #387ecb;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export default ParentScreenHeader;
