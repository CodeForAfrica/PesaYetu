/* eslint-disable jsx-a11y/media-has-caption */
import React, { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "videojs-youtube";
import "video.js/dist/video-js.css";

function Player(props) {
  const [videoEl, setVideoEl] = useState(null);
  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl !== null) {
      const player = videojs(videoEl, props);
      player.dispose();
    }
  }, [props, videoEl]);

  return (
    <div data-vjs-player>
      <video ref={onVideo} className="video-js" playsInline />
    </div>
  );
}

export default Player;
