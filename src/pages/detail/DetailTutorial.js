import React, { useEffect } from "react";
import { Container, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import NavbarDetail from "../../components/navbarDetail/NavbarDetail";
import { setTutorial } from "../../redux/actions/tutorialAction";
import { axios } from "../../axios/axios";

const DetailTutorial = () => {
  const dispatch = useDispatch();

  const { tutorial } = useSelector((state) => state.tutorialReducer);
  const { tutorialId } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getTutorial = async (id) => {
    const resp = await axios.get(`/tutorials/${id}`);
    if (resp.data) {
      const data = await resp.data;
      dispatch(setTutorial(data));
    }
  };

  useEffect(() => {
    getTutorial(tutorialId);
  }, [getTutorial, tutorialId]);

  if (!tutorial) {
    return <Loading />;
  }

  return (
    <div>
      <NavbarDetail />
      <Container>
        <TextField
          fullWidth
          margin="normal"
          label="Titulo"
          defaultValue={tutorial.nombre}
          disabled={true}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Profesor"
          defaultValue={tutorial.profesor}
          disabled={true}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Materia"
          defaultValue={tutorial.materia}
          disabled={true}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Fecha"
          defaultValue={tutorial.fecha.split("T")[0]}
          disabled={true}
        />
      </Container>
    </div>
  );
};

export default DetailTutorial;
