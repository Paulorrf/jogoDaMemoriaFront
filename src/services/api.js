import axios from "axios";

const api = axios.create({
  baseURL: "https://memoriaback.herokuapp.com/",
});

export default api;
