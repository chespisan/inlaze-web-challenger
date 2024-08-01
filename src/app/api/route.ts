import { FakeProductsService } from "app/services/fakeProducts";

const fakleProductsService = new FakeProductsService();

export async function GET() {
  const products = await fakleProductsService.getProducts();
  return Response.json({ products });
}
