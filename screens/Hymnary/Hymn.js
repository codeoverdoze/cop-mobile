import React from 'react';
import styled from 'styled-components';
import { Audio } from "expo-av";



// components
import ChildScreenHeader from '../../components/ChildScreenHeader';
import HymnPlayer from './components/HymnPlayer';

//data
import hymnBook from '../../sample-data/hymnary';
import { StyledText } from '../../components/Typography';
import { FlatList, View } from 'react-native';

function Hymn({ navigation }) {
  const hymnNumber = navigation.getParam('HymnNumber');
  const hymn = hymnBook[hymnNumber - 1];

  return (
    <Container>
      <ChildScreenHeader title={`PHB ${hymnNumber}`} />

      {hymn === undefined ? (
        <EmptyHymn>
          <StyledText>Empty</StyledText>
        </EmptyHymn>
      ) : (
        <>
          <FlatList data={hymn.verses} renderItem={renderVerses} keyExtractor={item => item} />

          <PlayerContainer>
            <HymnPlayer/>
          </PlayerContainer>
        </>
      )}
    </Container>
  );

  function renderVerses(verse) {
    if (verse) {
      return (
        <Verse>
          <View style={{ alignSelf: 'flex-start', paddingRight: 10 }}>
            <StyledText style={{ color: '#ef5350' }}>{verse.index + 1}</StyledText>
          </View>
          <View style={{ width: '90%', flexDirection: 'column' }}>
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
  background-color: #ffffff;
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

const PlayerContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 20px;
`;

export default Hymn;
