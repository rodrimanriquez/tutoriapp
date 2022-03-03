import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import NavLink from "../navLink/NavLink";

const ListItems = ({ items }) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <List>
        {items.map((item) => (
          <Fragment key={item.id}>
            <NavLink to={`detail/${item.id}`}>
              <ListItem>
                <ListItemButton>
                  <ListItemText
                    primary={item.nombre}
                    secondary={item.profesor}
                  />
                  <Typography variant="body1">
                    {item.fecha.split("T")[0]}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ListItems;
