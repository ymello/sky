interface MovieProps {
  src: string;
  alt: string;
}

export function Movie({ src, alt }: MovieProps) {
  return (
    <div className="w-[112px] sm:w-[139px] md:w[200px] lg:w-[200px] inline-block cursor-pointer relative p-2">
      <img
        className="transform transition inline-block duration-500 hover:scale-105"
        src={src}
        alt={alt}
      />
    </div>
  );
}
