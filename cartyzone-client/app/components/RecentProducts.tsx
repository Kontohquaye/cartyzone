import React from "react";
import { Product } from "../types/product";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { convertRating } from "@/lib/utils";
import Link from "next/link";

const RecentProducts = React.memo(
  async ({ products }: { products: Product[] }) => {
    return (
      <div className="container max-w-[100vw]  mx-auto mb-4">
        {!products.length && "No recent Products"}
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4">
          {products.length &&
            products.map((product) => {
              return (
                <Link href={`/products/${product._id}`} key={product._id}>
                  <div className="product flex flex-col transition-transform hover:-translate-y-1">
                    <div className="image relative w-full h-80 overflow-hidden">
                      <Image
                        src={product.product}
                        alt={`image of ${product.name}`}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="product-details">
                      <div className="ratings flex gap-1 py-2 text-yellow-500">
                        {Array.from({
                          length: convertRating(product.rating).fullStars,
                        }).map((_, i) => (
                          <Star key={i} size={20} />
                        ))}

                        {convertRating(product.rating).hasHalfStar && (
                          <StarHalf size={20} />
                        )}
                      </div>

                      <div className="name">{product.name}</div>
                      <div className="category">{product.category}</div>
                      <div className="price">{`GHS ${product.price.toFixed(
                        2
                      )}`}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
);

export default RecentProducts;
