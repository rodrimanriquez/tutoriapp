import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderTutorialBy } from "../../redux/actions/tutorialAction";
import { Box, Container, MenuItem, Select, Typography } from "@mui/material";

const OrderBy = () => {
  const [order, setOrderBy] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setOrderBy(value);
    dispatch(orderTutorialBy(value));
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography variant="body1" color="gray">
          Order por:
        </Typography>
        <Select
          defaultValue={order}
          onChange={handleChange}
          size="small"
          variant="standard"
        >
          <MenuItem value={1}>Título</MenuItem>
          <MenuItem value={2}>Fecha</MenuItem>
        </Select>
      </Box>
    </Container>
  );
};

export default OrderBy;
