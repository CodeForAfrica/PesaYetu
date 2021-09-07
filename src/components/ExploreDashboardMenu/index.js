import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Link from "@/pesayetu/components/Link";

const ExploreDashboardMenu = ({ items, ...props }) => {
  const classes = useStyles(props);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {items.map(({ children, label, path }) => (
        <>
          <Accordion
            classes={{
              root: classes.accordionRoot,
              expanded: classes.accordionExpanded,
            }}
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
                expanded: classes.summaryExpanded,
              }}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Link href={path}>
                <Typography> {label} </Typography>
              </Link>
            </AccordionSummary>
            <AccordionDetails
              classes={{
                root: classes.details,
              }}
            >
              {children.map((child) => (
                <Link href={child.path}>
                  <Typography> {child.label} </Typography>
                </Link>
              ))}
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
};

ExploreDashboardMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

ExploreDashboardMenu.defaultProps = {
  items: undefined,
};

export default ExploreDashboardMenu;
