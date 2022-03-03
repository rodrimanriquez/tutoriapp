import React, { useEffect } from "react";
import AddItemButton from "../../components/addItemButton/AddItemButton";
import ListItems from "../../components/listItems/ListItems";
import OrderBy from "../../components/orderby/OrderBy";
import Search from "../../components/search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setTutorials } from "../../redux/actions/tutorialAction";
import Loading from "../../components/loading/Loading";
import NavbarHome from "../../components/navbarHome/NavbarHome";
import { axios } from "../../axios/axios";
import { dynamicSort } from "../../helpers/dynamicSort";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const { tutorials } = useSelector((state) => state.tutorialReducer);

  const getAllTutorials = async () => {
    const resp = await axios.get("/tutorials");
    if (resp.data) {
      const dataSort = await resp.data.sort(dynamicSort("nombre"));
      dispatch(setTutorials(dataSort));
    }
  };

  const deleteTutorials = async () => {
    const resp = await axios.delete("/deletetutorials");
    if (resp.data) {
      getAllTutorials();
    }
  };

  useEffect(() => {
    getAllTutorials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (tutorials === null) {
    return <Loading />;
  }
  return (
    <>
      <NavbarHome />
      <Search />
      <OrderBy />
      {tutorials.length > 0 ? (
        <ListItems items={tutorials} />
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
        >
          <Typography>No hay tutoriales agregados :(</Typography>
        </Box>
      )}
      <AddItemButton />
      {tutorials !== null && tutorials.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", margin: "30px" }}>
          <Button variant="outlined" onClick={() => deleteTutorials()}>
            ELIMINAR TODOS
          </Button>
        </Box>
      )}
    </>
  );
};

export default Home;
