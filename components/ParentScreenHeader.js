import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { StyledHeaderInverse } from './Typography';
import Colors from '../constants/Colors';

function ParentScreenHeader({ title, children }) {
  return (
    <Container>
      {children ? (
        children
      ) : (
        <StyledHeaderInverse style={{ fontSize: 30 }}>{title}</StyledHeaderInverse>
      )}
    </Container>
  );
}

ParentScreenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const Container = styled.View`
  background-color: ${Colors.tintColor};
  height: 60px;
  justify-content: center;
  padding-horizontal: 40px;
`;

export default ParentScreenHeader;
