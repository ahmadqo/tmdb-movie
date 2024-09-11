import axios from "axios";

const API_KEY =
  import.meta.env.VITE_APP_TMDB_API_KEY || "5d5f3b6d0d7e158027c0d1694974c13b";
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});
