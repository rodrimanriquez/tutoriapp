import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const NavLink = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Link {...props} className={classes.root}>
      {children}
    </Link>
  );
};

export default NavLink;
