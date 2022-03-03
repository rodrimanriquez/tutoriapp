import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";

const NavbarHome = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tutoriales
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarHome;
