declare module "movie-trailer" {
  function movieTrailer(
    movieName: string,
    options?: { year?: string }
  ): Promise<string>;
  export default movieTrailer;
}
