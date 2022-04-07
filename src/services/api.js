import axios from "axios";

const api = axios.create({
  baseURL: "http://3.84.19.219:8080"
})

export default api