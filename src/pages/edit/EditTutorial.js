import React, { useEffect } from "react";
import { axios } from "../../axios/axios";
import { Box, Button, Container, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import NavbarEdit from "../../components/navbarEdit/NavbarEdit";
import { useForm } from "react-hook-form";
import { schemeForm } from "../../formScheme/scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { setTutorial } from "../../redux/actions/tutorialAction";
import Loading from "../../components/loading/Loading";

const EditTutorial = () => {
  const { tutorial } = useSelector((state) => state.tutorialReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tutorialId } = useParams();

  const getTutorial = async (id) => {
    const resp = await axios.get(`/tutorials/${id}`);
    if (resp.data) {
      const data = await resp.data;
      dispatch(setTutorial(data));
    }
  };

  useEffect(() => {
    getTutorial(tutorialId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tutorialId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemeForm),
  });

  const onSubmit = (data) => {
    data.fecha = data.fecha.split("T")[0];
    editTutorial(data, tutorial.id);
  };

  const deleteTutorial = async (id) => {
    const resp = await axios.delete(`/deletetutorial/${id}`);
    if (resp.data) {
      navigate("/");
    }
  };

  const editTutorial = async (data, id) => {
    const resp = await axios.put(`updatetutorial/${id}`, data);
    if (resp.data) {
      navigate("/");
    }
  };

  if (!tutorial) {
    return <Loading />;
  }

  return (
    <div>
      <NavbarEdit />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.nombre}
            fullWidth
            margin="normal"
            label="Título"
            defaultValue={tutorial.nombre}
            {...register("nombre")}
            helperText="Porfavor ingrese texto valido"
          />
          <TextField
            error={errors.profesorF}
            fullWidth
            margin="normal"
            label="Profesor"
            defaultValue={tutorial.profesor}
            {...register("profesor")}
            helperText="Porfavor ingrese texto valido"
          />
          <TextField
            error={errors.materia}
            fullWidth
            margin="normal"
            label="Materia"
            defaultValue={tutorial.materia}
            {...register("materia")}
            helperText="Porfavor ingrese texto valido"
          />
          <TextField
            error={errors.fecha}
            fullWidth
            margin="normal"
            label="Fecha"
            defaultValue={tutorial.fecha.split("T")[0]}
            {...register("fecha")}
            helperText="Porfavor ingrese texto valido"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => deleteTutorial(tutorial.id)}
            >
              Eliminar
            </Button>
            <Button variant="contained" type="submit">
              Modificar
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default EditTutorial;
