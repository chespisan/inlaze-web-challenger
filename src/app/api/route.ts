import { MoviesService } from "app/services/movies";

const moviesService = new MoviesService();

export async function GET() {
  const movies = await moviesService.getPrincipalMovies();
  return Response.json({ movies });
}
