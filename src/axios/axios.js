import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://rayentutorialtestapp.azurewebsites.net",
  header: { "Content-Type": "application/json" },
});
