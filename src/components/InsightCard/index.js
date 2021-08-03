// import { Card, CardContent, Typography } from "@material-ui/core";
// import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Content from "./Content";
import useStyles from "./useStyles";

import Card from "@/pesayetu/components/Card";

// import Link from "@/pesayetu/components/Link";

const InsightCard = ({
  title,
  description,
  image,
  href,
  linkdescription,
  ...props
}) => {
  const classes = useStyles(props);

  return (
    <Card
      classes={{ root: classes.card }}
      image={image}
      href={href}
      content={
        <Content
          title={title}
          description={description}
          linkdescription={linkdescription}
        />
      }
    />
    // <Card className={classes.card}>
    //    <div className={classes.cardMedia}>
    //     {image && <Image src={image} layout="fill" className={classes.image} />}
    //   </div>
    //   <CardContent className={classes.content}>
    //     {title && (
    //       <Typography variant="h4" className={classes.cardTitle}>
    //         {title}
    //       </Typography>
    //     )}
    //     {description && (
    //       <Typography variant="subtitle2" className={classes.cardDescription}>
    //         {description}
    //       </Typography>
    //     )}
    //     <Link className={classes.link} href={href}>
    //       {linkdescription && (
    //         <Typography variant="subtitle2" className={classes.linkText}>
    //           {linkdescription}
    //         </Typography>
    //       )}
    //     </Link>
    //   </CardContent>
    //  </Card>
  );
};

InsightCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  linkdescription: PropTypes.string,
};

InsightCard.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  href: undefined,
  linkdescription: undefined,
};

export default InsightCard;
