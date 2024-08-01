import HomePage from "app/pages/home";

export default async function Home() {
  try {
    const api = process.env.NEXT_PUBLIC_API_LOCAL;

    console.log("apiLocal: ", api);

    const response = await fetch(`${api}/api`);
    console.log("response: ", response);
    const data = await response.json();
    console.log("movies: ", data);

    // const responseGenres = await fetch(`${api}/api/genres`);
    // console.log("responseGenres: ", responseGenres);
    // const { genres } = await responseGenres.json();
    // console.log("genres: ", genres);
  } catch (error) {
    console.log("error: ", error);
  }
  // return <HomePage movies={movies} genres={genres} />;
  return (
    <div>
      <h1>Logs Test</h1>
    </div>
  );
}
