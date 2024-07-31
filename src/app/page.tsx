import { HomePage } from "app/pages/home";

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_LOCAL;
  const response = await fetch(`${api}/api`);
  const { movies } = await response.json();

  return <HomePage movies={movies} />;
}
