"use client";
import ProductList from "@/app/components/ProductList";
import ProductSkeleton from "@/app/components/ProductSkeleton";
import RangeSlider from "@/app/components/RangeSlider";
import { products, categories } from "@/app/data/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Products = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("category");
  console.log(search);
  return (
    <div className="container max-w-screen w-full grid grid-cols-1 sm:grid-cols-4 sm:gap-3 px-4">
      <div className="filters ">
        <h1 className="font-bold border-b border-b-gray-300 mb-2">
          Browse by:
        </h1>
        <div className="category-list pr-4">
          <Link href="/products">
            <div className={!search ? "text-lime-500 " : ""}>All products</div>
          </Link>
          {categories &&
            categories.map((category) => {
              const isActive = search === category.slug;
              return (
                <Link
                  href={`/products?category=${category.slug}`}
                  key={category.id}
                  className={isActive ? "text-lime-500 block" : " block"}
                >
                  {category.name}
                </Link>
              );
            })}
        </div>
        <h1 className="font-bold border-b border-b-gray-300">Filter by:</h1>
        <div className="price">
          <RangeSlider />
        </div>
      </div>
      <div className="products col-span-3">
        <Suspense fallback={<ProductSkeleton />}>
          <ProductList products={products} />
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
