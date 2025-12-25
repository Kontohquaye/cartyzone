import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="section relative min-h-[70vh] mt-4">
      <Image
        src="/purchase.jpg"
        alt="cta-image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="info absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Ready to find something you&#39;ll love?
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
          Explore our collection online or visit us in person.
        </p>
        <Link href="/shop">
          <Button className="bg-green-900 rounded-full ">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
