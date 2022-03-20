import axios from "axios";

const api = axios.create({
  url: "http://18.212.69.233:8080/"
})

export default api;