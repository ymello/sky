import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FeaturedMovie } from "./FeaturedMovie.js";
import { Movie } from "./Movie.js";

interface FeaturedRowProps {
  title: string;
  rowId: string;
  movies: [];
}

const baseImageUrl = "https://image.tmdb.org/t/p/w780";

export function FeaturedRow({ title, rowId, movies }: FeaturedRowProps) {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    if (slider) slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    if (slider) slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white -left-3 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, i) => (
            <>
              {movie.backdrop_path && (
                <FeaturedMovie
                  src={`${baseImageUrl}${movie.backdrop_path}`}
                  alt={movie.title}
                  key={i}
                />
              )}
            </>
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white -right-3 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
}
