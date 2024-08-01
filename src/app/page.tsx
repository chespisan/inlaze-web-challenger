import HomePage from "app/pages/home";

const Home = async () => {
  const api = process.env.NEXT_PUBLIC_API_LOCAL;
  console.log("apiLocal: ", api);

  const response = await fetch(`${api}/api`);
  const { movies } = await response.json();
  console.log("movies: ", movies);

  const responseGenres = await fetch(`${api}/api/genres`);
  const { genres } = await responseGenres.json();
  console.log("genres: ", genres);

  return <HomePage movies={movies} genres={genres} />;
};

export default Home;
