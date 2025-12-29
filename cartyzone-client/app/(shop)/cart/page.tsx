"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: CART TABLE */}
        <div className="lg:col-span-2">
          <div className="border rounded-md overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-6 bg-gray-50 text-sm font-medium px-4 py-3 border-b">
              <div></div>
              <div className="col-span-2">Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
            </div>

            {/* Item row */}
            <div className="grid grid-cols-6 items-center px-4 py-4 border-b">
              {/* Remove */}
              <button className="text-gray-400 hover:text-black">
                <X size={18} />
              </button>

              {/* Product */}
              <div className="col-span-2 flex items-center gap-4">
                <Image
                  src="/plant.png"
                  alt="Zen Bamboo Grove"
                  width={60}
                  height={60}
                  className="rounded border"
                />
                <span className="text-lime-600 font-medium">
                  Zen Bamboo Grove
                </span>
              </div>

              {/* Price */}
              <div>$90.00</div>

              {/* Quantity */}
              <input
                type="number"
                // min={1}
                // value={2}
                className="w-16 border px-2 py-1 text-center"
              />

              {/* Subtotal */}
              <div className="font-medium">$180.00</div>
            </div>

            {/* Coupon row */}
            <div className="flex flex-wrap items-center gap-3 px-4 py-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-3 py-2 w-48"
              />
              <Button className="rounded-full bg-lime-600 hover:bg-lime-700 text-white px-6">
                Apply coupon
              </Button>

              <div className="ml-auto">
                <Button
                  variant="outline"
                  className="rounded-full border-lime-600 text-lime-600 hover:bg-lime-50"
                >
                  Update cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CART TOTALS */}
        <div className="border rounded-md p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-6">Cart totals</h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$180.00</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-medium">
              <span>Total</span>
              <span>$180.00</span>
            </div>
          </div>

          <Button className="mt-6 w-full rounded-full bg-lime-600 hover:bg-lime-700 text-white py-6">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
