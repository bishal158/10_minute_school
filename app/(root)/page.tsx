import HomeClient from "@/components/home/HomeClient";
import { ProductData } from "@/types/types";
import { fetchProducts } from "@/utils/api";

const Home = async () => {

  const initialData: ProductData = await fetchProducts();
  console.log(initialData);
  return (
    <div className="w-full">
      <HomeClient initialData={initialData} />
    </div>
  )
}

export default Home
