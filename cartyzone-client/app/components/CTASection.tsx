import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="section relative min-h-[70vh] ">
      <Image
        src="https://files.edgestore.dev/9fafx9jpqygtarv1/Cartyzone/_public/purchase.jpg"
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
          Explore our collection online .
        </p>
        <Link href="/products">
          <Button className="bg-lime-700 hover:bg-lime-900 rounded-full cursor-pointer ">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
