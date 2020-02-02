import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

// components
import { StyledHeaderInverse } from "./Typography";

function ParentScreenHeader({ title }) {
  return (
    <Container>
      <StyledHeaderInverse>{title}</StyledHeaderInverse>
    </Container>
  );
}

ParentScreenHeader.propTypes = {
  title: propTypes.string.isRequired
};

const Container = styled.View`
  background-color: #387ecb;
  height: 80px;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export default ParentScreenHeader;
