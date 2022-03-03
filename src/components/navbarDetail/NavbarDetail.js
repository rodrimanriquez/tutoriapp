import { useParams } from "react-router-dom";
import NavLink from "../navLink/NavLink";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    color: "#ffffff",
  },
}));

const NavbarDetail = () => {
  const { tutorialId } = useParams();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <IconButton
              className={classes.icon}
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          </NavLink>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Detalle Tutorial
          </Typography>

          <NavLink to={`/edit/${tutorialId}`}>
            <IconButton
              className={classes.icon}
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <EditIcon />
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarDetail;
