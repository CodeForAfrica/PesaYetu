import { Grid, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: 500,
    marginRight: "4px",
    "&:hover": {
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: 600,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
  demo1: {
    backgroundColor: "white",
  },
  demo2: {
    backgroundColor: "white",
  },
  padding: {
    padding: "1rem",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Grid
      container
      direction="column"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </Grid>
  );
}

TabPanel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})),
  index: PropTypes.number,
  value: PropTypes.string,
};

TabPanel.defaultProps = {
  children: undefined,
  index: undefined,
  value: undefined,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NewsInsight() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs"
          classes={{ root: classes.tabs }}
        >
          <Tab label="News" {...a11yProps(0)} />
          <Tab label="Insights" {...a11yProps(1)} />
        </Tabs>
        <Typography className={classes.padding} />
      </div>
      <div className={classes.demo2}>
        <TabPanel value={value} index={0}>
          <Typography variant="h2">News content</Typography>
          <Typography variant="body1">this is one </Typography>
          <Typography variant="body1">this is two </Typography>
          <Typography variant="body1">this is three </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h2">Insight Content</Typography>
          <Typography variant="body1">this is four </Typography>
          <Typography variant="body1">this is five </Typography>
          <Typography variant="body1">this is six </Typography>
        </TabPanel>
      </div>
    </div>
  );
}
