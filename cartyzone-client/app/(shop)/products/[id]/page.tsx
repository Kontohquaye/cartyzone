import AddToCart from "@/app/components/AddToCartButton";
import ProductSkeleton from "@/app/components/ProductSkeleton";
import ProductTabs from "@/app/components/ProductTabs";
import RelatedProducts from "@/app/components/RelatedProducts";
import { Product, ProductDetails } from "@/app/types/product";
import { baseUrl, fetchData } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";

const ProductDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product: Product = await fetchData(`${baseUrl}products/${id}`, true);
  // console.log(product);

  const details: ProductDetails = {
    productId: product?.id,
    name: product?.name,
  };

  const relatedProducts: Product[] = await fetchData(
    `${baseUrl}products?category=${product?.category}`,
    true
  );

  //   console.log(product);
  return (
    <div className="container max-w-screen  px-4">
      <div className="product-details grid grid-cols-1 gap-3  sm:grid-cols-2 sm:gap-6 ">
        <div className="img relative min-h-[70vh]">
          <Image
            src={product?.product!}
            alt="product image"
            className="object-cover"
            fill
          />
        </div>
        <div className="details flex flex-col gap-3">
          <h2 className="product-category text-lime-700 font-medium">
            {product?.category.toLocaleUpperCase()}
          </h2>
          <h1 className="product-name font-extrabold text-xl">
            {product?.name}
          </h1>
          <h1 className="product-price text-xl font-bold text-[#333]">
            GHS {product?.price.toFixed(2)}
          </h1>
          <p className="product-description line-clamp-3">
            {product?.description}
          </p>
          <div className="actions ">
            <AddToCart product_id={product?.id} />
          </div>
          <div className="line border-b border-b-gray-300"></div>
          <div className="prod-category text-lime-700">
            <span className="text-black">Category</span> :{" "}
            {product?.category.toLocaleUpperCase()}
          </div>
          <div className="supported-payments flex flex-col items-center justify-center border border-gray-300">
            <div className="options flex items-center gap 3 pt-2">
              <Image
                src="https://files.edgestore.dev/9fafx9jpqygtarv1/Cartyzone/_public/Visa-Card-Logo-PNG-Transparent.png"
                alt="visa-card logo"
                width={70}
                height={30}
                className="h-auto w-auto"
              />
              <Image
                src="https://files.edgestore.dev/9fafx9jpqygtarv1/Cartyzone/_public/Visa-Card-Logo-No-Background.png"
                alt="master-card logo"
                width={70}
                height={30}
                className="h-auto w-auto"
              />
            </div>
            <div className="provider flex items-center gap-3">
              <b>Powered by:</b>
              <Image
                src="https://files.edgestore.dev/9fafx9jpqygtarv1/Cartyzone/_public/paystack.png"
                alt="paystack logo"
                width={90}
                height={30}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="prod-tabs">
        <ProductTabs description={product?.description} product={details} />
      </div>
      <div className="related-products">
        <Suspense fallback={<ProductSkeleton />}>
          <RelatedProducts
            products={relatedProducts
              .filter((p) => p.id !== product?.id)
              .slice(0, 3)}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductDetail;
