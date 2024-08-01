import { HomePage } from "app/pages/home";

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_LOCAL;
  const response = await fetch(`${api}/api`);
  const { movies } = await response.json();

  const responseGenres = await fetch(`${api}/api/genres`);
  const { genres } = await responseGenres.json();

  return <HomePage movies={movies} genres={genres} />;
}
