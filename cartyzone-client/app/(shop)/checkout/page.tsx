"use client";

import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      {/* Coupon notice */}
      <div className="mb-8 border-t-2 border-lime-600 bg-gray-50 px-4 py-3 text-sm">
        <span className="font-medium">Have a coupon?</span>{" "}
        <button className="text-lime-600 hover:underline">
          Click here to enter your code
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT: BILLING DETAILS */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Billing details</h2>

          <form className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="First name" required />
              <Input label="Last name" required />
            </div>

            <Input label="Company name" optional />

            <Select label="Country / Region" required>
              <option>United States (US)</option>
            </Select>

            <Input
              label="Street address"
              placeholder="House number and street name"
              required
            />
            <Input placeholder="Apartment, suite, unit, etc. (optional)" />

            <Input label="Town / City" required />

            <Select label="State" required>
              <option>California</option>
            </Select>

            <Input label="ZIP Code" required />
            <Input label="Phone" required />
            <Input label="Email address" type="email" required />

            {/* Additional info */}
            <div className="pt-6">
              <h2 className="text-xl font-semibold mb-3">
                Additional information
              </h2>
              <label className="block text-sm mb-1">
                Order notes (optional)
              </label>
              <textarea className="w-full border px-3 py-2 min-h-[100px]" />
            </div>
          </form>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="border rounded-md p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-4">Your order</h2>

          <div className="text-sm space-y-3">
            <div className="flex justify-between font-medium border-b pb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="flex justify-between">
              <span>Zen Bamboo Grove × 2</span>
              <span>$180.00</span>
            </div>

            <div className="border-t pt-3 flex justify-between">
              <span>Subtotal</span>
              <span>$180.00</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-medium">
              <span>Total</span>
              <span>$180.00</span>
            </div>
          </div>

          {/* Payment notice */}
          <div className="mt-6 border-t-2 border-lime-600 bg-gray-50 px-4 py-3 text-sm">
            Sorry, it seems that there are no available payment methods. Please
            contact us if you require assistance.
          </div>

          <Button className="mt-6 w-full rounded-full bg-lime-600 hover:bg-lime-700 text-white py-6">
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
}

/* -------------------- */
/* Reusable form parts */
/* -------------------- */

function Input({ label, required, optional, placeholder, type = "text" }: any) {
  return (
    <div>
      {label && (
        <label className="block text-sm mb-1">
          {label} {required && <span className="text-red-500">*</span>}
          {optional && (
            <span className="text-muted-foreground">(optional)</span>
          )}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border px-3 py-2"
      />
    </div>
  );
}

function Select({ label, required, children }: any) {
  return (
    <div>
      <label className="block text-sm mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select className="w-full border px-3 py-2">{children}</select>
    </div>
  );
}
