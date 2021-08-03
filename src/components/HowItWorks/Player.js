/* eslint-disable jsx-a11y/media-has-caption */
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useState } from "react";
import videojs from "video.js";
import "videojs-youtube";
import "video.js/dist/video-js.css";

import videoImg from "@/pesayetu/assets/images/Group 4702.svg";

function Player({ videoSrc, videoType }) {
  const [videoEl, setVideoEl] = useState(null);
  const onVideo = useCallback((el) => {
    setVideoEl(el);
  }, []);

  useEffect(() => {
    if (videoEl == null) return null;
    const player = videojs(videoEl);
    return () => {
      player.dispose();
    };
  }, [videoEl]);

  return (
    <div data-vjs-player>
      <video
        ref={onVideo}
        className="video-js vjs-default-skin hide"
        playsInline
        controls
        preload="auto"
        poster={videoImg}
        data-setup={{}}
      >
        <source src={videoSrc} type={videoType} />
      </video>
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
