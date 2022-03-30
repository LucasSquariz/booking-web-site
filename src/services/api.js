import axios from "axios";

const api = axios.create({
  baseURL: "http://44.201.189.176:8080/"
})

export default api