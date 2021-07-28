/* eslint-disable jsx-a11y/media-has-caption */
import PropTypes from "prop-types";
import React from "react";
import "videojs-youtube";
import "video.js/dist/video-js.css";

import videoImg from "@/pesayetu/assets/images/Group 4702.svg";
import useStyles from "@/pesayetu/components/HowItWorks/useStyles";

function Player({ videoSrc, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.video}>
      <div data-vjs-player>
        <video
          id="how-it-works-video"
          className="video-js"
          playsInline
          controls
          preload="auto"
          poster={videoImg}
          data-setup={{
            techOrder: ["youtube"],
            sources: [
              {
                type: "video/youtube",
                src: videoSrc,
              },
            ],
          }}
        >
          <source src={videoSrc} type="video/youtube" />
        </video>
      </div>
    </div>
  );
}

Player.propTypes = {
  videoSrc: PropTypes.string,
};

Player.defaultProps = {
  videoSrc: undefined,
};

export default Player;
