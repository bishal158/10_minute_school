import { ApiResponse, ProductData } from "@/types/product";
import { fetchProductData } from "@/utils/api";

export default async function ProductPage() {
  const lang = "bn";
  let productData: ProductData | null = null;

  try {
    const response: ApiResponse = await fetchProductData(lang);
    productData = response.data;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Loading failed</h1>
          <p className="text-gray-600 mt-2">
            Couldn&lsquo;t load product data. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  console.log("Product Data:", productData);

  // Render the product data
  return <div className="w-full min-h-screen">{productData.title}</div>;
}
