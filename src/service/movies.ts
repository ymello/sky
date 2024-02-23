import axiosInstance from "../utils/axiosInstance.js";

const fetchPopularMovies = async () => {
  try {
    const response = await axiosInstance.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes em destaque:", error);
    return [];
  }
};

const fetchHorrorMovies = async () => {
  try {
    const response = await axiosInstance.get("/discover/movie", {
      params: {
        with_genres: 27,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes de terror:", error);
    return [];
  }
};

const fetchBrazilianMovies = async () => {
  try {
    const response = await axiosInstance.get("/discover/movie", {
      params: {
        with_original_language: "pt",
        region: "BR",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes nacionais do Brasil:", error);
    return [];
  }
};

const fetchDCComicsMovies = async () => {
  try {
    const response = await axiosInstance.get("/search/movie", {
      params: {
        query: "DC Comics",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes relacionados à DC Comics:", error);
    return [];
  }
};

const fetchMarvelMovies = async () => {
  try {
    const response = await axiosInstance.get("/search/movie", {
      params: {
        query: "Marvel",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes relacionados à Marvel:", error);
    return [];
  }
};

export {
  fetchPopularMovies,
  fetchHorrorMovies,
  fetchBrazilianMovies,
  fetchDCComicsMovies,
  fetchMarvelMovies,
};
