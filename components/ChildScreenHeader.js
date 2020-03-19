import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

// components
import SVGIcon from './SVGIcon';
import { StyledTextInverse } from './Typography';
import { backIcon } from '../assets/icons';

function ChildScreenHeader({ title, navigation }) {
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack(null)}>
        <SVGIcon source={backIcon} fill="#ffffff" width={25} />
      </BackButton>

      <TitleContainer>
        <Title>
          <StyledTextInverse style={{ fontSize: 17, textAlign: 'center' }} numberOfLines={2}>
            {title}
          </StyledTextInverse>
        </Title>
      </TitleContainer>
    </Container>
  );
}

ChildScreenHeader.propTypes = {
  title: propTypes.string.isRequired,
};

const Container = styled.View`
  background-color: #25569c;
  height: 60px;
  flex-direction: row;
`;

const BackButton = styled.TouchableOpacity`
  width: 50px;
  position: absolute;
  z-index: 1;
  padding-left: 15px;
  top: 20%;
`;

const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.View`
  width: 60%;
`;

export default withNavigation(ChildScreenHeader);
