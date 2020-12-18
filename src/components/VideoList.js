import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  // Create brand new array, containing videoitem components
  const renderedList = videos.map((video) => {
      return <VideoItem
        key={ video.id.videoId }
        onVideoSelect={ onVideoSelect }
        video= { video }
      />;
  });

  return (
    // return props.videos from parent
    <div className="ui relaxed divided list">{ renderedList }</div>
  )
};

export default VideoList;
