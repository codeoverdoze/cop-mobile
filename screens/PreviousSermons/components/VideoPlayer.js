import React, { useState, useRef } from 'react';
import { View, ProgressViewIOS, TouchableOpacity } from 'react-native';
import { StyledText } from '../../../components/Typography';
import styled from 'styled-components';
import SVGIcon from '../../../components/SVGIcon';
import { fastForward, fastRewind, pauseIcon, sermonPlay } from '../../../assets/icons';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../../../constants/Colors';
import { EvilIcons } from '@expo/vector-icons';

import { Video } from 'expo-av';
import Layout from '../../../constants/Layout';

const VideoPlayer = ({ title, effectiveDate, url }) => {
  let videoRef = useRef();
  const [playerStatus, setPlayerStatus] = useState('playing');
  const [progress, setProgress] = useState(0.4);
  return (
    <PlayerContainer>
      <View style={{ marginBottom: 20 }}>
        <Video
          source={{ uri: url }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={Video.RESIZE_MODE_COVER}
          shouldPlay
          style={{ minWidth: Layout.window.width, minHeight: 300 }}
          ref={component => {
            videoRef = component;
          }}
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />
      </View>
      <View style={{ marginBottom: 40 }}>
        <StyledText
          style={{
            fontFamily: 'bold',
            fontSize: RFValue(14),
            marginBottom: 10,
            color: Colors.tintColor,
            textAlign: 'center',
          }}
        >
          {title}
        </StyledText>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <EvilIcons name="calendar" size={25} color="#9d9d9d" />
            <StyledText style={{ color: '#9d9d9d' }}>
              {new Date(effectiveDate).toDateString()}
            </StyledText>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 40,
          flexDirection: 'row',
          alignItems: 'space-around',
          marginBottom: 20,
        }}
      >
        <View style={{ flex: 0.5 }}>
          <StyledText>{new Date(progress).toISOString().slice(11, -1)}</StyledText>
        </View>
        <View style={{ flex: 0.5 }}>
          <StyledText style={{ textAlign: 'right' }}>17:44</StyledText>
        </View>
      </View>
      <View style={{ backgroundColor: 'green', width: '80%', marginBottom: 20 }}>
        <ProgressViewIOS progressViewStyle="bar" progress={progress} trackTintColor="red" />
      </View>
      <FloatingControlBox>
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <FastRewindContainer>
            <SVGIcon source={fastRewind} height={25} width={25} />
          </FastRewindContainer>
        </View>
        {playerStatus === 'playing' ? (
          <View style={{ flex: 0.4, justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity onPress={onPause}>
              <PlayPauseContainer>
                <SVGIcon source={pauseIcon} height={50} width={50} />
              </PlayPauseContainer>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 0.4, justifyContent: 'flex-start', alignItems: 'center' }}>
            <TouchableOpacity onPress={onPlay}>
              <PlayPauseContainer>
                <SVGIcon source={sermonPlay} height={50} width={50} />
              </PlayPauseContainer>
            </TouchableOpacity>
          </View>
        )}
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <FastForwardContainer>
            <SVGIcon source={fastForward} height={25} width={25} />
          </FastForwardContainer>
        </View>
      </FloatingControlBox>
    </PlayerContainer>
  );

  async function onPause() {
    await videoRef.pauseAsync();
    setPlayerStatus('paused');
  }

  async function onPlay() {
    await videoRef.playAsync();
    setPlayerStatus('playing');
  }

  async function handlePlaybackStatusUpdate(status) {
    if (status.isLoaded) {
      setProgress(Number(status.positionMillis) / status.durationMillis);
    }

    if (status.positionMillis === status.durationMillis) {
      await videoRef.setPositionAsync(0);
      setProgress(0);
    }

    if (status.isPlaying) {
      setPlayerStatus('playing');
    } else {
      setPlayerStatus('paused');
    }
  }
};

const FastRewindContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 1px solid #25569c;
  background-color: #f5f5f5;
`;

const FastForwardContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 1px solid #25569c;
  background-color: #f5f5f5;
`;

const PlayPauseContainer = styled.View`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  border: 1px solid #25569c;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`;

const ControlBox = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f8fafb;
  height: 120px;
  width: 100%;
  bottom: 50px;
`;

const FloatingControlBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PlayerContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

export default VideoPlayer;
