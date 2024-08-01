import HomePage from "app/pages/home";

const Home = async () => {
  try {
    const api = process.env.NEXT_PUBLIC_API_LOCAL;
    console.log("apiLocal: ", api);

    const response = await fetch(`${api}/api`);
    console.log("response: ", response);
    const { movies } = await response.json();
    console.log("movies: ", movies);

    const responseGenres = await fetch(`${api}/api/genres`);
    console.log("responseGenres: ", responseGenres);
    const { genres } = await responseGenres.json();
    console.log("genres: ", genres);
    return <HomePage movies={movies} genres={genres} />;
  } catch (error) {
    console.log("error: ", error);
  }
};

export default Home;
