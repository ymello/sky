import { useQuery } from "react-query";
import { FeaturedRow } from "./components/FeaturedRow.js";
import { Footer } from "./components/Footer.js";
import { Navbar } from "./components/Navbar.js";
import { Row } from "./components/Row.js";
import {
  fetchHorrorMovies,
  fetchBrazilianMovies,
  fetchDCComicsMovies,
  fetchMarvelMovies,
  fetchPopularMovies,
} from "./service/movies.js";

export default function App() {
  const { data: horrorMovies } = useQuery("horrorMovies", fetchHorrorMovies);
  const { data: brazilianMovies } = useQuery(
    "brazilianMovies",
    fetchBrazilianMovies
  );
  const { data: dcComicsMovies } = useQuery(
    "dcComicsMovies",
    fetchDCComicsMovies
  );
  const { data: marvelMovies } = useQuery("marvelMovies", fetchMarvelMovies);

  const { data: PopularMovies } = useQuery("movieData", fetchPopularMovies);

  return (
    <>
      <Navbar />
      {PopularMovies && (
        <FeaturedRow rowId="0" title="Up Coming" movies={PopularMovies} />
      )}

      <div className="container py-8">
        {horrorMovies && (
          <Row rowId="1" title="Os mais temidos" movies={horrorMovies} />
        )}
        {brazilianMovies && (
          <Row rowId="2" title="Coletania nacional" movies={brazilianMovies} />
        )}
        {dcComicsMovies && (
          <Row rowId="3" title="DC comics" movies={dcComicsMovies} />
        )}
        {marvelMovies && <Row rowId="4" title="Marvel" movies={marvelMovies} />}
      </div>

      <Footer />
    </>
  );
}
