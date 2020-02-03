import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import SVGIcon from '../../../components/SVGIcon';
import { downloadIcon, pauseIcon, playIcon } from '../../../assets/icons';
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
      <View />
      {isPlaying ? renderPaused() : isPaused ? renderPlay() : renderLoading()}

      <TouchableOpacity
        onPress={() => {
          showMessage({
            type: 'info',
            backgroundColor: Colors.tintColor,
            message: 'You have found a future feature. \n Download feature will be added soon',
          });
        }}
      >
        <SVGIcon source={downloadIcon} />
      </TouchableOpacity>
    </PlayerContainer>
  );

  function renderPlay() {
    return (
      <TouchableOpacity onPress={play}>
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

export default HymnPlayer;
