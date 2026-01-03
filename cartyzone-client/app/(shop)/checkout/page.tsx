"use client";

import { Button } from "@/components/ui/button";
import useCartStore from "@/app/store/cartStore";
import { products } from "@/app/data/data";
import { addedFee } from "@/lib/utils";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);

  const productList = Object.values(cart.products).flat();
  const idSet = new Set(productList.map((p) => p.product_id));

  const filteredProducts = products.filter((p) => idSet.has(p._id));

  const subtotal = filteredProducts.reduce((total, product) => {
    const cartItem = cart.products.find(
      (item) => item.product_id === product._id
    );

    if (!cartItem) return total;

    return Number(total + product.price * cartItem.quantity);
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      {/* Coupon notice */}
      <div className=" flex justify-between items-center mb-8 border-t-2 border-lime-600 bg-gray-50 px-4 py-3 text-sm">
        <div className="left">
          <span className="font-medium">Have a coupon?</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="eg: GIVEAWAY25"
            className="focus:outline-none border-b-2 text-[#333] border-b-lime-300 p-1"
          />
        </div>
        <button className="text-lime-600 hover:underline">Apply coupon</button>
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
              <option>Ghana (GH)</option>
            </Select>

            <Input
              label="Street address"
              placeholder="House number and street name"
              required
            />
            <Input placeholder="Apartment, suite, unit, etc. (optional)" />

            <Input
              label="Town / City"
              required
              value="Kumasi"
              readOnly={true}
            />

            <Select label="Region" required>
              <option>Ashanti</option>
            </Select>

            <Input label="ZIP Code" required value="000000" readOnly={true} />
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

        {/* RIGHT: ORDER SUMMARY */}
        <div className="border rounded-md p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-4">Your order</h2>

          <div className="text-sm space-y-3">
            <div className="flex justify-between font-medium border-b pb-2">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {/* PRODUCTS */}
            {filteredProducts.map((product) => {
              const cartItem = cart.products.find(
                (item) => item.product_id === product._id
              );

              if (!cartItem) return null;

              return (
                <div key={product._id} className="flex justify-between text-sm">
                  <span>
                    {product.name} × {cartItem.quantity}
                  </span>
                  <span>
                    GHS {(product.price * cartItem.quantity).toFixed(2)}
                  </span>
                </div>
              );
            })}

            {/* SUBTOTAL */}
            <div className="border-t pt-3 flex justify-between">
              <span>Subtotal</span>
              <span>GHS {subtotal.toFixed(2)}</span>
            </div>

            {/* TOTAL (same as subtotal for now) */}
            <div className="border-t pt-3 flex justify-between font-medium">
              <span>Total</span>
              <span>
                GHS{" "}
                {(
                  Number(subtotal) +
                  Number(Object.values(addedFee).reduce((a, b) => a + b, 0))
                ).toFixed(2)}
              </span>
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

function Input({
  label,
  required,
  optional,
  placeholder,
  value,
  readOnly = false,
  type = "text",
}: any) {
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
        defaultValue={value ?? value}
        type={type}
        readOnly={readOnly}
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

/***
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

          
          <div className="mt-6 border-t-2 border-lime-600 bg-gray-50 px-4 py-3 text-sm">
            Sorry, it seems that there are no available payment methods. Please
            contact us if you require assistance.
          </div>

          <Button className="mt-6 w-full rounded-full bg-lime-600 hover:bg-lime-700 text-white py-6">
            Place order
          </Button>
        </div>***/
