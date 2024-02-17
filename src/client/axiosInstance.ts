import axios from "axios";

// Create Axios instance with default headers
const client = axios.create({
  baseURL: "https://lobster-app-4hmrm.ondigitalocean.app",
  // baseURL: "http://localhost:8000",
});

// getting token from localstorage
const token = localStorage.getItem("token");
if (token) {
  // setting the token in auth header
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default client;
