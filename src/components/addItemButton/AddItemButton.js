import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  fab: {
    position: "absolute",
    right: "20px",
    bottom: "80px",
  },
}));

const AddItemButton = () => {
  const classes = useStyles();

  return (
    <Link to="add">
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Link>
  );
};

export default AddItemButton;
