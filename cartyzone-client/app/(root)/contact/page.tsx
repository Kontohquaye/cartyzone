import ContactSection from "@/app/components/ContactSection";
import FollowUs from "@/app/components/FollowUs";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="container max-w-screen">
      <div className="section relative min-h-[70vh] mt-4 w-full">
        <Image
          src="https://files.edgestore.dev/9fafx9jpqygtarv1/Cartyzone/_public/Get-in-touch.jpg"
          alt="cta-image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="info absolute inset-0 flex flex-col items-center justify-center text-center sm:px-6 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            “Let&#39;s make your shopping experience even better.”
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
            Your feedback, questions, and ideas help us serve you better.
          </p>
        </div>
      </div>
      <ContactSection />
      <FollowUs />
    </div>
  );
};

export default Contact;
