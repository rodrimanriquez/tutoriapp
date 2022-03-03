import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import NavbarAdd from "../../components/navbarAdd/NavbarAdd";
import { useForm } from "react-hook-form";
import { schemeForm } from "../../formScheme/scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { axios } from "../../axios/axios";

const AddTutorial = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemeForm),
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const createTutorial = async (data) => {
    const resp = await axios.post("/createtutorial", data);
    if (resp.data) {
      setOpen(true);
      reset();
    }
    return resp;
  };

  const onSubmit = (data) => {
    createTutorial(data);
  };

  return (
    <>
      <NavbarAdd />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.nombre ? true : false}
            fullWidth
            margin="normal"
            label="Título"
            {...register("nombre")}
            helperText={errors.nombre ? errors.nombre.message : ""}
          />
          <TextField
            error={errors.profesor ? true : false}
            fullWidth
            margin="normal"
            label="Profesor"
            {...register("profesor")}
            helperText={errors.profesor ? errors.profesor.profesor : ""}
          />
          <TextField
            error={errors.materia ? true : false}
            fullWidth
            margin="normal"
            label="Materia"
            {...register("materia")}
            helperText={errors.materia ? errors.materia.message : ""}
          />
          <TextField
            error={errors.fecha ? true : false}
            fullWidth
            margin="normal"
            label="Fecha"
            {...register("fecha")}
            helperText={errors.fecha ? errors.fecha.message : ""}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" type="submit">
              Agregar
            </Button>
          </Box>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Tutorial Guardado con exito!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default AddTutorial;
