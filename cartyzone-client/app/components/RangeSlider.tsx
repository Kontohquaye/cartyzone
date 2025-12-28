"use client";
import { useState, ChangeEvent } from "react";
import { PriceRangeSliderProps } from "../types/product";
import { useSearchParams, useRouter } from "next/navigation";

// Borrowed feature
const PriceRangeSlider = ({
  min = 0,
  max = 1000,
  gap = 10,
  initialMin = 0,
  initialMax = 1000,
  onChange,
}: PriceRangeSliderProps) => {
  const [minVal, setMinVal] = useState<number>(initialMin);
  const [maxVal, setMaxVal] = useState<number>(initialMax);
  const router = useRouter();
  // fetch category
  const searchParams = useSearchParams();

  const search = searchParams.get("category");
  const baseUrl = search ? `/products?category=${search}` : "/products?";

  const minPercent = (minVal / max) * 100;
  const maxPercent = (maxVal / max) * 100;

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.target.value, maxVal - gap);
    setMinVal(value);
    onChange?.(value, maxVal);
    router.push(
      search
        ? baseUrl + `&min-price=${minVal}&max-price=${maxVal}`
        : baseUrl + `min-price=${minVal}&max-price=${maxVal}`
    );
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.target.value, minVal + gap);
    setMaxVal(value);
    onChange?.(minVal, value);
    router.push(baseUrl + `&min-price=${minVal}&max-price=${maxVal}`);
  };

  return (
    <div className="w-full max-w-sm ">
      <h3 className="  my-2">Price Range</h3>

      {/* Slider */}
      <div className="relative h-1 bg-gray-400 rounded">
        {/* Track */}
        <div
          className="absolute h-1 bg-lime-700 rounded"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        {/* Min */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinChange}
          className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow"
        />

        {/* Max */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxChange}
          className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:shadow"
        />
      </div>

      {/* Inputs */}
      <div className="flex gap-4 mt-6">
        <input
          type="number"
          value={minVal}
          readOnly
          className="w-1/2 border focus:outline-0 rounded px-1 py-2 text-sm"
        />
        <input
          type="number"
          value={maxVal}
          readOnly
          className="w-1/2 border rounded focus:outline-0 px-1 py-2 text-sm"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
