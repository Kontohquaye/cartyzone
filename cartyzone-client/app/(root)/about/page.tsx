import CoreValues from "@/app/components/CoreValues";
import CTASection from "@/app/components/CTASection";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container  max-w-screen ">
      <div className="section relative min-h-[70vh] mt-4 ">
        <Image
          src="https://files.edgestore.dev/9fafx9jpqygtarv1/Cartyzone/_public/About-us.jpg"
          alt="about-us-image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="info absolute inset-0 flex flex-col items-center justify-center text-center sm:px-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Everything you love 😁 in one zone.
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
            CartyZone is your all-in-one shopping destination for everyday
            essentials and exciting finds. From electronics and fashion to home,
            toys, and lifestyle products, we make shopping simple, affordable,
            and enjoyable, all in one place.
          </p>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
            {/* <span>Shop smart.</span> &nbsp;<span>Shop easy.</span> &nbsp;
            <span>All Carts in one zone.</span> */}
            <span className="text-lime-400 font-semibold">Shop smart.</span>{" "}
            <span className="text-white/70">Shop easy.</span>{" "}
            <span className="text-white/60">All carts in one zone.</span>
          </p>
        </div>
      </div>

      <section className="more mt-16 px-6 max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          CartyZone is an ecommerce marketplace designed to make online shopping
          faster and smarter. We carefully curate products across multiple
          categories so you can shop with confidence, knowing you&#39;re getting
          value and quality every time. From electronics and fashion to home
          essentials and lifestyle products — all carts meet in one zone.
        </p>

        <p className="text-base md:text-lg italic text-gray-500">
          “Because great shopping should feel easy.”
        </p>

        <div className="ceo mt-6 flex items-center gap-4">
          <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden ring-2 ring-gray-200">
            <Image
              src="https://files.edgestore.dev/9fafx9jpqygtarv1/Cartyzone/_public/b55d8240-e089-4bd8-a54c-0891dd1454f5.jpg"
              alt="CEO of CartyZone"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-left">
            <h2 className="font-semibold text-gray-900">
              Kontoh Emmanuel Quaye
            </h2>
            <p className="text-sm text-gray-500">
              CEO & Co-founder @ CartyZone
            </p>
          </div>
        </div>
      </section>
      <CoreValues />
      <CTASection />
    </div>
  );
};

export default AboutPage;
