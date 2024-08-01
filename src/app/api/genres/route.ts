import { MoviesService } from "app/services/movies";

const moviesService = new MoviesService();

export async function GET() {
  const genres = await moviesService.getGenreMovies();
  return Response.json({ genres });
}
