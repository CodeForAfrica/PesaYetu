import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

function PanelButtonGroup({
  items,
  value,
  handleChange: handleChangeProps,
  ...props
}) {
  const classes = useStyles(props);

  const handleChange = (_, selected) => {
    handleChangeProps(selected);
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
      >
        {items.map((buttonProps) => (
          <ToggleButton className={classes.button} {...buttonProps}>
            <Image
              className={classes.icon}
              src={buttonProps.icon}
              width={27}
              height={27}
            />
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
  handleChange: PropTypes.func,
};

PanelButtonGroup.defaultProps = {
  items: undefined,
  value: undefined,
  handleChange: undefined,
};

export default PanelButtonGroup;
