import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import SVGIcon from '../../../components/SVGIcon';
import { pauseIcon, playIcon } from '../../../assets/icons';
import usePlayer from './usePlayer';

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
      {isPlaying ? renderPaused() : isPaused ? renderPlay() : renderLoading()}
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
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export default HymnPlayer;
