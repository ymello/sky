import axios from "axios";

const API_KEY = "381e077d46d49204070aa72dc3c5d94e";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFlMDc3ZDQ2ZDQ5MjA0MDcwYWE3MmRjM2M1ZDk0ZSIsInN1YiI6IjY1ZDc3OTYzZjA0ZDAxMDE3YzM1NTRmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MA5xDsCDo-fXnVGSKSr2bKXvMNJH3nZqJg0s2oovTe4";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000, // 10 segundos
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    api_key: API_KEY,
  },
});

export default axiosInstance;
