import { Suspense } from "react";
import CTASection from "../components/CTASection";
import HeroSection from "../components/Hero";
import RecentProducts from "../components/RecentProducts";
import ProductSkeleton from "../components/ProductSkeleton";
import { baseUrl, fetchData } from "@/lib/utils";
import { Product } from "../types/product";

export default async function Home() {
  const products: Product[] = await fetchData(`${baseUrl}products`, true);
  const recentProducts = products
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 10);
  return (
    <div className=" w-full">
      <HeroSection />
      <Suspense fallback={<ProductSkeleton />}>
        <RecentProducts products={recentProducts} />
      </Suspense>
      <CTASection />
    </div>
  );
}
