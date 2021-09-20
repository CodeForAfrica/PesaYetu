import { Box } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import LocationHighlight from "@/pesayetu/components/HURUmap/LocationHighlight";
import LocationTag from "@/pesayetu/components/HURUmap/LocationTag";

function Location({ className, highlights, isLoading, tags, ...props }) {
  const classes = useStyles(props);

  if (!tags?.length) {
    return null;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={clsx(classes.root, className)}
    >
      <Box
        display="flex"
        flexWrap="nowrap"
        justifyContent="center"
        className={classes.tags}
      >
        {tags.map((tag, index) => (
          <LocationTag
            key={`${tag.level}-${tag.name}`}
            isLoading={isLoading}
            {...tag}
            active={index === tags.length - 1}
            variant="highlight"
            classes={{
              root: classes.tag,
              level: classes.tagLevel,
              name: classes.tagName,
            }}
          />
        ))}
      </Box>
      {highlights?.length > 0 ? (
        <Box
          display="flex"
          flexWrap="nowrap"
          justifyContent="center"
          className={classes.highlights}
        >
          {highlights.map((highlight) => (
            <LocationHighlight
              key={highlight.title}
              isLoading={isLoading}
              {...highlight}
              classes={{
                root: classes.highlight,
                title: classes.highlightTitle,
                value: classes.highlightValue,
              }}
            />
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

Location.propTypes = {
  className: PropTypes.string,
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      number: PropTypes.number,
    })
  ),
  isLoading: PropTypes.bool,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

Location.defaultProps = {
  className: undefined,
  highlights: undefined,
  isLoading: undefined,
  tags: undefined,
};

export default Location;
