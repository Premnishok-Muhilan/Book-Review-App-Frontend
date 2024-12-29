import axios from "axios";

// define the base url
// local
const baseURL = "http://localhost:3001/api/v1";
// deployed
// const baseURL = "https://book-review-app-backend-dxo4.onrender.com/api/v1";

// define the axios instance
const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
