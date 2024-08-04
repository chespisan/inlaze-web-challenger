import { FakeProductsService } from "app/services/fakeProducts";

// const fakleProductsService = new FakeProductsService();

export async function GET() {
  return [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];
  // const products = await fakleProductsService.getProducts();
  // return Response.json({ products });
}
// https://inlaze-web-challenger.vercel.app
// https://inlaze-web-challenger-orcqygie3-chespisans-projects.vercel.app
// https://inlaze-web-challenger-mjq45s2v8-chespisans-projects.vercel.app/
