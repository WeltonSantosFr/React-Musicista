import axios from "axios";

// api graphQL

// const api = axios.create({
//   baseURL:
//     "https://sa-east-1.cdn.hygraph.com/content/clhs1y7lf1r3701t5am9ihatx/master",
//   timeout: 5000,
//   headers: { "Content-Type": "application/json" },
// });

// API LOCAL

const api = axios.create({
  baseURL: "http://localhost:3001",
})

export default api;
