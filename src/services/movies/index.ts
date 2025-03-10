export class MoviesService {
  async getPrincipalMovies() {
    try {
      const response = await fetch(`${process.env.API_URL}/movies`);
      const movies = response.json();
      return movies;
    } catch (error) {
      return;
    }
  }

  async getGenreMovies() {
    try {
      const response = await fetch(`${process.env.API_URL}/movies/genres`);
      const genres = response.json();
      return genres;
    } catch (error) {
      return;
    }
  }
}
