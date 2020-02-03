import React from "react";
import styled from "styled-components";

// components
import ChildScreenHeader from "../../components/ChildScreenHeader";

//data
import hymnBook from "../../sample-data/hymnary";
import { StyledText } from "../../components/Typography";
import { FlatList, View } from "react-native";

function Hymn({ navigation }) {
  const hymnNumber = navigation.getParam("HymnNumber");
  const hymn = hymnBook[hymnNumber - 1];

  return (
    <Container>
      <ChildScreenHeader title={`PHB ${hymnNumber}`} />

      {hymn === undefined ? (
        <EmptyHymn>
          <StyledText>Empty</StyledText>
        </EmptyHymn>
      ) : (
        <FlatList
          data={hymn.verses}
          renderItem={renderVerses}
          keyExtractor={item => item}
        />
      )}
    </Container>
  );

  function renderVerses(verse) {
    if (verse) {
      return (
        <Verse>
          <View style={{ alignSelf: "flex-start", paddingRight: 10 }}>
            <StyledText style={{ color: "#ef5350" }}>
              {verse.index + 1}
            </StyledText>
          </View>
          <View style={{ width: "90%", flexDirection: "column" }}>
            <StyledText bible style={{ fontSize: 18 }}>
              {verse.item}
            </StyledText>
          </View>
        </Verse>
      );
    }
  }
}

const Container = styled.View`
  flex: 1;
`;

const Verse = styled.View`
  flex-direction: row;
  margin: 10px;
`;

const EmptyHymn = styled.View`
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export default Hymn;
