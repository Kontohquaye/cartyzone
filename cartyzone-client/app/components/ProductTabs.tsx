"use client";
import { Activity, useState } from "react";
import { Button } from "@/components/ui/button";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import { ProductDetails } from "../types/product";

const ProductTabs = ({
  description,
  product,
}: {
  description: string;
  product: ProductDetails;
}) => {
  const [isShowingDescription, setIsShowingDescription] = useState(true);
  return (
    <div className="container max-w-screen">
      <section className="nav border-t border-t-gray-300 ">
        <Button
          variant={"ghost"}
          onClick={() => setIsShowingDescription(true)}
          className={
            isShowingDescription
              ? "border-t-2 pl-0 border-t-lime-600 rounded-none py-2"
              : "rounded-none pl-0"
          }
        >
          Description
        </Button>
        <Button
          variant={"ghost"}
          className={
            !isShowingDescription
              ? "border-t-2 px-0 border-t-lime-600 rounded-none py-2"
              : "rounded-none px-0"
          }
          onClick={() => setIsShowingDescription(false)}
        >
          Reviews
        </Button>
      </section>
      <section className="contents">
        <Activity mode={isShowingDescription ? "visible" : "hidden"}>
          <ProductDescription description={description} />
        </Activity>
        <Activity mode={!isShowingDescription ? "visible" : "hidden"}>
          <ProductReviews details={product} />
        </Activity>
      </section>
    </div>
  );
};

export default ProductTabs;
