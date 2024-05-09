import React from "react";
import './Video.css';

const Video = () => {
  return (
    <>
    <div className="custom_video" >
      <video className="vid" autoPlay loop muted>
        <source src="/images/5.mp4"  type="video/mp4" />
      </video>
    </div>

    <div className="contents">
      <div className="title">
        
      </div>
    </div>
    </>
  );
};

export default Video;
