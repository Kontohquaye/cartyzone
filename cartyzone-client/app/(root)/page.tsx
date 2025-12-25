import { Suspense } from "react";
import CTASection from "../components/CTASection";
import HeroSection from "../components/Hero";
import RecentProducts from "../components/RecentProducts";
import { products } from "../data/data";
import ProductSkeleton from "../components/ProductSkeleton";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <Suspense fallback={<ProductSkeleton />}>
        <RecentProducts products={products} />
      </Suspense>
      <CTASection />
    </div>
  );
}
