import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import AudioPlayer from './components/AudioPlayer';

const SermonPlayer = ({ navigation }) => {
  const { type, ...sermon } = navigation.getParam('sermon');
  if (type === 'video') {
    return <VideoPlayer {...sermon} />;
  } else {
    return <AudioPlayer {...sermon} />;
  }
};

export default SermonPlayer;
