import { Grid, TextField, Typography } from "@material-ui/core";
import clsx from "clsx";
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

function Share({ title, geoCode, indicatorId, ...props }) {
  const classes = useStyles(props);

  const code = `<iframe style="height:100%; width: 100%"
  src="${
    process.env.NEXT_PUBLIC_APP_URL
  }/embed/${geoCode.toLowerCase()}/${indicatorId}"></iframe>
  `;

  return (
    <Grid container className={classes.root}>
      {shareData.map((social) => {
        switch (social.name) {
          case "Facebook":
            return (
              <Grid item lg={4}>
                <FacebookShareButton
                  title=""
                  url=""
                  className={classes.shareButton}
                >
                  <FacebookIcon className={classes.icon} />
                </FacebookShareButton>
              </Grid>
            );
          case "Twitter":
            return (
              <Grid item lg={4}>
                <TwitterShareButton
                  title=""
                  url=""
                  className={classes.shareButton}
                >
                  <TwitterIcon className={classes.icon} />
                </TwitterShareButton>
              </Grid>
            );
          case "LinkedIn":
            return (
              <Grid item lg={4}>
                <LinkedinShareButton className={classes.shareButton}>
                  <LinkedInIcon className={classes.icon} />
                </LinkedinShareButton>
              </Grid>
            );
          case "Email":
            return (
              <Grid item lg={4}>
                <EmailShareButton className={classes.shareButton}>
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
  geoCode: PropTypes.string,
  indicatorId: PropTypes.number,
};

Share.defaultProps = {
  title: undefined,
  geoCode: undefined,
  indicatorId: undefined,
};

export default Share;
