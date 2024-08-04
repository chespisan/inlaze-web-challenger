export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_LOCAL;
  // // const api2 = process.env.API_LOCAL;
  // console.log("api: ", api);
  // // console.log("api2: ", api2);
  let productsFake: any = [];
  // try {
  //   const response = await fetch(`${api}/api`);
  //   console.log("response: ", response);

  //   const data = await response.json();
  //   console.log("Products: ", data);
  //   // productsFake = products;
  // } catch (error) {
  //   console.log("error: ", error);
  // }

  return (
    <div>
      <ul>
        {productsFake?.map((product: any) => (
          <li key={product?.id}>{product?.name}</li>
        ))}
      </ul>
    </div>
  );
}
