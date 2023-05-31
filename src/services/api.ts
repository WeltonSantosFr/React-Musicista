import axios from "axios";

const api = axios.create({
  baseURL:
    "https://sa-east-1.cdn.hygraph.com/content/clhs1y7lf1r3701t5am9ihatx/master",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default api;
