import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

interface Movie {
  movie: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}

export function FeaturedMovieModal({ movie }: Movie) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowTrailer = async () => {
    try {
      setLoading(true);
      const url = await movieTrailer(movie.title || movie.original_title || "");

      if (!url) {
        console.error("Trailer URL not found");
        return;
      }

      const videoIdMatch = url.match(/(?:v=)([\w-]+)/);
      if (!videoIdMatch) {
        console.error("Video ID not found in URL:", url);
        return;
      }

      const videoId = videoIdMatch[1];
      console.log("Video ID:", videoId);

      if (trailerUrl) {
        setTrailerUrl("");
      }

      setTrailerUrl(videoId);
    } catch (error) {
      console.error("Error fetching trailer:", error);
      setTrailerUrl("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <img
          className="transform transition inline-block duration-500 hover:scale-105"
          src={`https://image.tmdb.org/t/p/w780/${movie?.backdrop_path}`}
          alt={movie.title}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-900 opacity-70" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto bg-white p-4 rounded-md">
          <div className="mb-5 flex items-center justify-between">
            <Dialog.Title asChild>
              <p className="text-xl font-bold">{movie.title}</p>
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-2xl text-black transition-colors hover:text-gray-600">
                <MdClose size={24} />
              </button>
            </Dialog.Close>
          </div>
          <p className="text-gray-600 mb-4">{movie.overview}</p>

          <button
            onClick={handleShowTrailer}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2 transition-colors"
          >
            Watch Trailer
          </button>

          {loading ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            <>
              {trailerUrl && (
                <div className="mt-4">
                  <YouTube
                    videoId={trailerUrl}
                    opts={{ width: "100%", height: "360" }}
                  />
                </div>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
