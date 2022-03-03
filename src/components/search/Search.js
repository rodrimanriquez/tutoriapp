import React, { useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setTutorials } from "../../redux/actions/tutorialAction";
import { axios } from "../../axios/axios";
import { dynamicSort } from "../../helpers/dynamicSort";

const Search = ({ order }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const searchQuery = async (query) => {
    const resp = await axios.get(`/tutorial?description=${query}`);
    if (resp.data) {
      const dataSort = resp.data.sort(dynamicSort("nombre"));
      dispatch(setTutorials(dataSort));
    }
  };

  useEffect(() => {
    searchQuery(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Container>
      <TextField
        fullWidth
        margin="normal"
        label="Buscar por titulo"
        onChange={(e) => setQuery(e.target.value)}
      />
    </Container>
  );
};

export default Search;
