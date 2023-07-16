import axios from "axios";

// Create Axios instance with default headers
const client = axios.create({
  baseURL: "https://oyster-app-upr7i.ondigitalocean.app",
});

// getting token from localstorage
const token = localStorage.getItem("token");
if (token) {
  // setting the token in auth header
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default client;
