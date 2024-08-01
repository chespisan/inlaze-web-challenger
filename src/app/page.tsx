import HomePage from "app/pages/home";

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_LOCAL;
  let productsFake = [];

  try {
    const response = await fetch(`${api}/api`);
    console.log("response", response);
    const { products } = await response.json();

    console.log("Products: ", products);
    // productsFake = products;
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
