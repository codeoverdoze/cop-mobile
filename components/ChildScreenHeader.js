import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { withNavigation } from "react-navigation";

// components
import SVGIcon from "./SVGIcon";
import { StyledTextInverse } from "./Typography";
import { backIcon } from "../assets/icons";

function ChildScreenHeader({ title, navigation }) {
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack(null)}>
        <SVGIcon source={backIcon} fill="#ffffff" width={25} />
      </BackButton>

      <Title>
        <StyledTextInverse style={{ fontSize: 20 }}>{title}</StyledTextInverse>
      </Title>
    </Container>
  );
}

ChildScreenHeader.propTypes = {
  title: propTypes.string.isRequired,
};

const Container = styled.View`
  background-color: #387ecb;
  height: 80px;
  padding-top: 45px;
  flex-direction: row;
`;

const BackButton = styled.TouchableOpacity`
  width: 50px;
  position: absolute;
  padding-top: 40px;
  padding-left: 15px;
  justify-content: center;
`;

const Title = styled.View`
  width: 100%;
  align-items: center;
`;

export default withNavigation(ChildScreenHeader);
