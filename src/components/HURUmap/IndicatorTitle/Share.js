import { Grid, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useS3Upload } from "next-s3-upload";
import PropTypes from "prop-types";
import React from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  EmailShareButton,
} from "react-share";

import useStyles from "./useStyles";

import { ReactComponent as TwitterIcon } from "@/pesayetu/assets/icons/Group 3047.svg";
import { ReactComponent as FacebookIcon } from "@/pesayetu/assets/icons/Group 3048.svg";
import { ReactComponent as LinkedInIcon } from "@/pesayetu/assets/icons/Group 3184.svg";
import { ReactComponent as EmailIcon } from "@/pesayetu/assets/icons/Group 4106.svg";

const shareData = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Twitter", icon: TwitterIcon },
  { name: "Email", icon: EmailIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
];

function Share({ title, geoCode, indicatorId, view, ...props }) {
  const classes = useStyles(props);
  const { uploadToS3 } = useS3Upload();
  // Embed url
  const url = `${
    process.env.NEXT_PUBLIC_APP_URL
  }/embed/${geoCode.toLowerCase()}/${indicatorId}`;

  const handleShare = async () => {
    const imgurl = await view.toImageURL("png");

    // Convert to File format
    const arr = imgurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    // eslint-disable-next-line no-plusplus
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    const result = new File([u8arr], "image.png", { type: mime });
    await uploadToS3(result);
  };

  const code = `<div>
  <style>
    .frame {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      z-index: 10;
    }
    .wrapper {
        position: relative;
        overflow: hidden;
        padding-top: 75%;
    }
    @media (max-width: 1280px) {
        .wrapper {
          padding-top: 90%;
        }
    @media (max-width: 768px) {
      .wrapper {
        padding-top: 100%;
      }
    @media (max-width: 620px) {
      .wrapper {
        padding-top: 120%;
      }
      @media (max-width: 500px) {
        .wrapper {
          padding-top: 160%;
        }
}
</style> 
<div class="wrapper"><iframe class="frame" 
  src="${
    process.env.NEXT_PUBLIC_APP_URL
  }/embed/${geoCode.toLowerCase()}/${indicatorId}"></iframe></div></div>
  `;

  return (
    <Grid container className={classes.root}>
      {shareData.map((social) => {
        switch (social.name) {
          case "Facebook":
            return (
              <Grid item xs={4}>
                <FacebookShareButton
                  title={title}
                  url={url}
                  className={classes.shareButton}
                  beforeOnClick={handleShare}
                >
                  <FacebookIcon className={classes.icon} />
                </FacebookShareButton>
              </Grid>
            );
          case "Twitter":
            return (
              <Grid item xs={4}>
                <TwitterShareButton
                  title={title}
                  url={url}
                  className={classes.shareButton}
                  beforeOnClick={handleShare}
                >
                  <TwitterIcon className={classes.icon} />
                </TwitterShareButton>
              </Grid>
            );
          case "LinkedIn":
            return (
              <Grid item xs={4}>
                <LinkedinShareButton
                  title={title}
                  url={url}
                  className={classes.shareButton}
                  beforeOnClick={handleShare}
                >
                  <LinkedInIcon className={classes.icon} />
                </LinkedinShareButton>
              </Grid>
            );
          case "Email":
            return (
              <Grid item xs={4}>
                <EmailShareButton
                  title={title}
                  url={url}
                  className={classes.shareButton}
                  beforeOnClick={handleShare}
                >
                  <EmailIcon className={classes.icon} />
                </EmailShareButton>
              </Grid>
            );
          default:
            return null;
        }
      })}
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <Typography className={classes.text}>Embed on your website:</Typography>
      </Grid>
      <Grid item xs={12} className={clsx(classes.row, classes.layout)}>
        <TextField
          value={code}
          InputProps={{ classes: { input: clsx(classes.code, classes.text) } }}
        />
      </Grid>
    </Grid>
  );
}

Share.propTypes = {
  title: PropTypes.string,
  view: PropTypes.shape({
    toImageURL: PropTypes.func,
    data: PropTypes.func,
  }),
  geoCode: PropTypes.string,
  indicatorId: PropTypes.number,
};

Share.defaultProps = {
  view: undefined,
  title: undefined,
  geoCode: undefined,
  indicatorId: undefined,
};

export default Share;
