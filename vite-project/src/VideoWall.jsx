import React from 'react';
import Sidebar from './sidebar';
import WallHeader from './components-VideoWall/WallHeader';
import VideoPlayer from './components-VideoWall/VideoPlayer';
import EventsCaptured from './components-VideoWall/EventsCaptured';
import './VideoWall.css';
import CameraInfo from './components-VideoWall/CameraInfo';

const VideoWall = () => {
     return (
    <div className="video-wall">
      <Sidebar />
      <div className="main-content">
        <WallHeader />
        <CameraInfo />
        <VideoPlayer />
        <EventsCaptured />
        
      </div> 
    </div>
  );
}

export default VideoWall;


  
