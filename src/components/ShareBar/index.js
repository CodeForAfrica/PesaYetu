import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
} from "react-share";

import ShareButton from "./ShareButton";
import useStyles from "./useStyles";

import { ReactComponent as TwitterIcon } from "@/pesayetu/assets/icons/Group 3047.svg";
import { ReactComponent as FacebookIcon } from "@/pesayetu/assets/icons/Group 3048.svg";
import { ReactComponent as LinkedInIcon } from "@/pesayetu/assets/icons/Group 3184.svg";
import { ReactComponent as EmailIcon } from "@/pesayetu/assets/icons/Group 4106.svg";
import { ReactComponent as CopyIcon } from "@/pesayetu/assets/icons/Group 5062.svg";

const ShareBar = ({ socialLinks, title, children, ...props }) => {
  const classes = useStyles(props);

  const [copied, setCopied] = useState(false);

  const handleOnCopy = () => {
    setCopied((prev) => !prev);
  };

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => timer && clearTimeout(timer);
  }, [copied]);

  if (!socialLinks?.length) {
    return null;
  }
  const url = typeof window !== "undefined" ? window.location : null;
  return (
    <div className={classes.root}>
      {children && (
        <Typography variant="body2" className={classes.children}>
          {children}
        </Typography>
      )}
      {socialLinks.map(({ name }) => {
        const social = name.toLowerCase();
        switch (social) {
          case "copyurl":
            return (
              <ShareButton title={title} url={url} alt={social}>
                <CopyToClipboard text={url?.href} onCopy={handleOnCopy}>
                  <CopyIcon className={classes.icon} />
                </CopyToClipboard>
              </ShareButton>
            );
          case "facebook":
            return (
              <ShareButton
                component={FacebookShareButton}
                title={title}
                url={url}
                alt={social}
              >
                <FacebookIcon className={classes.icon} />
              </ShareButton>
            );
          case "twitter":
            return (
              <ShareButton
                component={TwitterShareButton}
                title={title}
                url={url}
                alt={social}
              >
                <TwitterIcon className={classes.icon} />
              </ShareButton>
            );
          case "linkedin":
            return (
              <ShareButton
                component={LinkedinShareButton}
                title={title}
                url={url}
                alt={social}
              >
                <LinkedInIcon className={classes.icon} />
              </ShareButton>
            );
          case "email":
            return (
              <ShareButton
                component={EmailShareButton}
                title={title}
                url={url}
                alt={social}
              >
                <EmailIcon className={classes.icon} />
              </ShareButton>
            );
          default:
            return null;
        }
      })}
      {copied ? <p className={classes.copied}> Copied! </p> : null}
    </div>
  );
};

ShareBar.propTypes = {
  socialLinks: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  title: PropTypes.string,
  children: PropTypes.string,
};

ShareBar.defaultProps = {
  socialLinks: undefined,
  children: undefined,
  title: undefined,
};

export default ShareBar;
