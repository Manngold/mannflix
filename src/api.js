import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c8d7c73d573d01c32347691c8f0c99bc",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;
