import axios from "axios";

// API LOCAL
const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
})

// API Render
// const api = axios.create({
//   baseURL: "https://musicista-api.onrender.com",
//   headers: { "Content-Type": "application/json" },
// })

export default api;
