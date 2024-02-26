import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { MovieModal } from "./MovieModal.js";

interface RowProps {
  title: string;
  rowId: string;
  movies: [];
}

export function Row({ title, rowId, movies }: RowProps) {
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    if (slider) slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    if (slider) slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className="text-black font-bold md:text-xl mb-2">{title}</h2>
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
          <div className="w-[112px] sm:w-[139px] md:w-[200px] lg:w-[200px]  cursor-pointer relative p-2 flex gap-4">
            {movies.map((movie, i) => (
              <MovieModal movie={movie} key={i} />
            ))}
          </div>
        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white -right-3 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </div>
  );
}
