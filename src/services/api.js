import axios from "axios";

const api = axios.create({
  baseURL: "http://44.203.195.230:8080"
})

export default api