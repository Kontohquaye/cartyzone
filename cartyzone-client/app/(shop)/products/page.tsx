"use client";
import ProductList from "@/app/components/ProductList";
import ProductSkeleton from "@/app/components/ProductSkeleton";
import RangeSlider from "@/app/components/RangeSlider";
import { products, categories } from "@/app/data/data";
import { Product } from "@/app/types/product";
import { fetchData, baseUrl } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Products = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const search = searchParams.get("category");
  const query = searchParams.toString();
  // console.log(search);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      try {
        const result = await fetchData<Product[]>(
          `${baseUrl}products?${query}`,
          true
        );
        setData(result);
      } catch (error) {
        // console.error(error);
        toast.error("Something went wrong while fetching products");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [query]);

  // useEffect(() => {
  //   // const fetchD = async () => {
  //   //   const result = await fetchData("http://localhost:3500/products", true);
  //   //   setData(result);
  //   // };
  //   // fetchD();
  //   try {
  //     fetchData<Product[]>(
  //       `http://localhost:3500/products?${query}`,
  //       true
  //     ).then(setData);
  //     setLoading(false);
  //   } catch (error) {

  //     setLoading(false);
  //     toast.error(" Something went wrong while fetching products");
  //   }

  //   // setLoading(false);
  //   // console.log(data);
  // }, [query]);

  // console.log(data);

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
        {loading ? <ProductSkeleton /> : <ProductList products={data} />}
      </div>
    </div>
  );
};

export default Products;
