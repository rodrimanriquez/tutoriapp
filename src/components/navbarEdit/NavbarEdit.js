import NavLink from "../navLink/NavLink";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  icon: {
    color: "#ffffff",
  },
}));

const NavbarEdit = () => {
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
            Modificar Tutorial
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarEdit;
