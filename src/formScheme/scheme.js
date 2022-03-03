import * as yup from "yup";

const _validateString = yup.string().required("* Es requerido");

export const schemeForm = yup.object().shape({
  nombre: _validateString,
  profesor: _validateString,
  materia: _validateString,
  fecha: _validateString,
});
