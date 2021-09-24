import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function PanelButtonGroup({ items, value, onChange, ...props }) {
  const classes = useStyles(props);
  const handleChange = (_, selected) => {
    onChange(selected);
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
          <ToggleButton {...buttonProps} className={classes.button}>
            <Image className={classes.icon} src={icon} width={44} height={44} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

PanelButtonGroup.propTypes = {
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
  items: undefined,
  value: undefined,
  onChange: undefined,
};

export default PanelButtonGroup;
