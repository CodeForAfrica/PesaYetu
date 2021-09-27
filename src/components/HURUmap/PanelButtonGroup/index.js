import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function PanelButtonGroup({ items, value, onChange, pins, ...props }) {
  const classes = useStyles(props);
  const handleChange = (_, selected) => {
    onChange(selected);
  };
  const isPin = (current) => {
    return pins.includes(current);
  };
  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <ToggleButtonGroup
        orientation="vertical"
        value={value}
        exclusive
        onChange={handleChange}
        className={classes.buttonGroup}
      >
        {items.map(({ icon, ...buttonProps }) => (
          <ToggleButton
            {...buttonProps}
            className={clsx(classes.button, {
              [classes.pin]: isPin(buttonProps.value),
            })}
          >
            <Image className={classes.icon} src={icon} width={44} height={44} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

PanelButtonGroup.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

PanelButtonGroup.defaultProps = {
  pins: [],
  items: undefined,
  value: undefined,
  onChange: undefined,
};

export default PanelButtonGroup;
