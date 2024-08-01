export const formatDate = (current: string) => {
  const date = new Date(current);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatRating = (rating: number) => {
  return `${Math.round(rating * 10) / 10} / 10`;
};

export const getMoviePoster = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

export const getMovieBackdrop = (backdropPath: string) => {
  return `https://image.tmdb.org/t/p/w1280${backdropPath}`;
};

// export const getGenreName = (genreId: number, genres: any) => {
//   const genre = genres.find((g) => g.id === genreId);
//   return genre?.name || "";
// };
