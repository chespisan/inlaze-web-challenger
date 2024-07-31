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
}
