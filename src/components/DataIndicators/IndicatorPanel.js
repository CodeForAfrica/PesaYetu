import { RichTypography } from "@commons-ui/core";
import { ButtonBase, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {},
  paper: {},
  content: {},
  title: {},
  description: {},
}));

function IndicatorPanel({ currentItem, onClick, component, ...props }) {
  const Component = component || Slide;
  const classes = useStyles(props);
  const { content, description, title, ...otherClasses } = classes;

  return (
    <Component {...props} classes={otherClasses}>
      <ButtonBase
        disableRipple
        disableTouchRipple
        onClick={onClick}
        className={classes.content}
      >
        {currentItem?.title && (
          <RichTypography variant="h3" className={classes.title}>
            {currentItem.title}
          </RichTypography>
        )}
        {currentItem?.description && (
          <RichTypography className={classes.description}>
            {currentItem.description}
          </RichTypography>
        )}
      </ButtonBase>
    </Component>
  );
}

IndicatorPanel.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  component: PropTypes.elementType,
  currentItem: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

IndicatorPanel.defaultProps = {
  classes: undefined,
  currentItem: undefined,
  component: undefined,
  onClick: undefined,
};

export default IndicatorPanel;
