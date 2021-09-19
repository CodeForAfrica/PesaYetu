import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

const PanelButtonGroup = ({ items, ...props }) => {
  const [selected, setSelected] = useState();
  const classes = useStyles(props);
  if (!items || !items.length) {
    return null;
  }
  const handleChange = (_, href) => {
    setSelected(href);
  };
  return (
    <div className={classes.root}>
      <ToggleButtonGroup
        orientation="vertical"
        value={selected}
        exclusive
        onChange={handleChange}
      >
        {items.map(({ href, icon }) => (
          <ToggleButton className={classes.button} value={href} href={href}>
            <Image src={icon} width={27} height={27} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

PanelButtonGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

PanelButtonGroup.defaultProps = {
  items: undefined,
};

export default PanelButtonGroup;
