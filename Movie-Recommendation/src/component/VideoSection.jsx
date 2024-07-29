import React from 'react';

const VideoSection = ({ videoKey }) => {
  console.log(videoKey);
  return (
    <div className='ratio ratio-16x9'>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        allowFullScreen
        title='YouTube video'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    </div>
  );
};

export default VideoSection;
