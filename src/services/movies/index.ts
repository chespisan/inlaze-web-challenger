export class MoviesService {
  async getPrincipalMovies() {
    try {
      console.log("Api url: ", process.env.NEXT_PUBLIC_API_URL);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
      const movies = response.json();
      return movies;
    } catch (error) {
      return;
    }
  }

  async getGenreMovies() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movies/genres`
      );
      const genres = response.json();
      return genres;
    } catch (error) {
      return;
    }
  }
}
