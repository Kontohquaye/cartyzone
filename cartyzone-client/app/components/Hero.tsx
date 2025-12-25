"use client";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { urls } from "../data/hero_images";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="section relative min-h-[70vh]">
      <Image
        src={urls[index]}
        alt="hero-images"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="hero-nav absolute gap-0 flex justify-around items-center bg-black/20 rounded-full bottom-1 left-1/2 -translate-x-1/2 z-20">
        <div className="left ">
          <ChevronLeft
            size={40}
            color="#fff"
            onClick={() => {
              index === 0 ? setIndex(urls.length - 1) : setIndex(index - 1);
            }}
          />
        </div>
        {urls.map((url, i) => (
          <div key={url} onClick={() => setIndex(i)}>
            <Dot
              size={44}
              color={i === index ? "#ffffff" : "rgba(255,255,255,0.6)"}
            />
          </div>
        ))}
        <div className="right ">
          <ChevronRight
            size={40}
            color="#fff"
            onClick={() => {
              index === urls.length - 1 ? setIndex(0) : setIndex(index + 1);
            }}
          />
        </div>
      </div>
      <div className="info absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Shop Smarter. Live Better.
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
          Quality products, fair prices, and fast delivery all in one place.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
