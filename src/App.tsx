import { useQuery } from "react-query";
import axiosInstance from "./utils/axiosInstance.js";
import "./App.css";

const fetchPopularMovies = async () => {
  const response = await axiosInstance.get("/movie/popular");
  return response.data.results;
};

export default function App() {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery("movieData", fetchPopularMovies);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  if (movies) {
    console.log(movies.results);
  }

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.results.map((movie: any) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
