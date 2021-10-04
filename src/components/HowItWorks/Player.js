/* eslint-disable jsx-a11y/media-has-caption */
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import videojs from "video.js";
import "videojs-youtube";
import "video.js/dist/video-js.css";

import poster from "@/pesayetu/assets/images/Group 4702.svg";

function Player({ videoSrc, videoType }) {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const options = {
        autoplay: false,
        controls: true,
        poster,
        preload: "auto",
        sources: [{ src: videoSrc, type: videoType }],
      };
      playerRef.current = videojs(videoElement, options);
    }
  }, [videoSrc, videoType]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin hide" />
    </div>
  );
}

Player.propTypes = {
  videoSrc: PropTypes.string,
  videoType: PropTypes.string,
};

Player.defaultProps = {
  videoSrc: undefined,
  videoType: undefined,
};

export default Player;
