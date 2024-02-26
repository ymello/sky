import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FeaturedMovieModal } from "./FeaturedMovieModal.js";

interface FeaturedRowProps {
  title: string;
  rowId: string;
  movies: [];
}

export function FeaturedRow({ rowId, movies }: FeaturedRowProps) {
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
          <div className="w-[289px] sm:w-[289px] md:w-[512px] lg:w-[695px] inline-block cursor-pointer relative p-2">
            {movies.map((movie, i) => (
              <FeaturedMovieModal key={i} movie={movie} />
            ))}
          </div>
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
