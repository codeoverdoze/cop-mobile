import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import SVGIcon from '../../../components/SVGIcon';
import { downloadIcon, pauseIcon, playIcon, starIcon } from '../../../assets/icons';
import usePlayer from './usePlayer';
import { showMessage } from 'react-native-flash-message';
import Colors from '../../../constants/Colors';

function HymnPlayer() {
  const { isPaused, isPlaying, play, pause } = usePlayer();

  return (
    <PlayerContainer
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
      }}
    >
      <PlayerItem>
        <SVGIcon source={starIcon} fill="grey" />
      </PlayerItem>
      <PlayerItem>
        {isPlaying ? renderPaused() : isPaused ? renderPlay() : renderLoading()}
      </PlayerItem>

      <PlayerItem>
        <TouchableOpacity
          onPress={() => {
            showMessage({
              type: 'info',
              backgroundColor: Colors.tintColor,
              message: 'You have found a future feature',
              description:
                'A download feature will be added soon so you can keep your favourite tunes in Worship Companion',
            });
          }}
        >
          <SVGIcon source={downloadIcon} />
        </TouchableOpacity>
      </PlayerItem>
    </PlayerContainer>
  );

  function renderPlay() {
    return (
      <TouchableOpacity
        onPress={() => {
          showMessage({
            type: 'info',
            backgroundColor: Colors.tintColor,
            message: 'You have found a future feature',
            description: 'Very soon you can play your hymn tunes directly from Worship Companion',
          });
        }}
      >
        <SVGIcon source={playIcon} />
      </TouchableOpacity>
    );
  }

  function renderPaused() {
    return (
      <TouchableOpacity onPress={pause}>
        <SVGIcon source={pauseIcon} />
      </TouchableOpacity>
    );
  }

  function renderLoading() {
    return <ActivityIndicator />;
  }
}

const PlayerContainer = styled.View`
  background-color: #ffffff;
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const PlayerItem = styled.View`
  flex: 1;
  align-items: center;
`;

export default HymnPlayer;
