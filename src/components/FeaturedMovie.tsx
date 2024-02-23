interface FeaturedMovieProps {
  src: string;
  alt: string;
}

export function FeaturedMovie({ src, alt }: FeaturedMovieProps) {
  return (
    <div className="w-[289px] sm:w-[289px] md:w-[512px] lg:w-[695px] inline-block cursor-pointer relative p-2">
      <img
        className="transform transition inline-block duration-500 hover:scale-105"
        src={src}
        alt={alt}
      />
    </div>
  );
}
