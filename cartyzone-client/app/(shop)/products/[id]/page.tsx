import { products } from "@/app/data/data";

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = products.find((product) => product._id == id);
  console.log(product);
  return <div className="container">{id}</div>;
};

export default ProductDetail;
