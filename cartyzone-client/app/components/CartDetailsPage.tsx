"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "../store/cartStore";
import { products } from "../data/data";

export default function CartDetails() {
  const cart = useCartStore((state) => state.cart);
  const productList = Object.values(cart.products).flat();
  const allProducts = products;
  //   console.log(products);
  const idSet = new Set(productList.map((p) => p.product_id));
  const filteredProducts = allProducts.filter((p) => idSet.has(p._id));
  //   console.log(filteredProducts);
  return (
    <div className="flex flex-col h-full">
      {/* CART ITEMS */}
      {idSet && (
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {filteredProducts.map((product) => {
            const cartProduct = productList.filter(
              (p) => p.product_id === product._id
            );
            const reducedCartProduct: {
              product_id?: string;
              quantity?: number;
            } = cartProduct.reduce((a, b) => ({ ...a, ...b }), {});
            const quantity = reducedCartProduct.quantity;
            return (
              <div key={product._id} className="flex items-start gap-4">
                <Image
                  src={product.product}
                  alt={product.name}
                  width={56}
                  height={56}
                  className="rounded-md border"
                />

                <div className="flex-1">
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {quantity} × GHS {product.price}
                  </p>
                </div>

                <button className="text-muted-foreground hover:text-black">
                  <X size={18} />
                </button>
              </div>
            );
          })}
        </div>
      )}
      {idSet.size === 0 && (
        <div className="flex mb-3 flex-col items-center justify-center flex-1 px-4 text-center">
          <div className="mb-4 rounded-full bg-lime-100 p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-lime-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 2.6A1 1 0 006.6 17h12.8M7 13L5.4 5M16 17a1 1 0 100 2 1 1 0 000-2zm-8 0a1 1 0 100 2 1 1 0 000-2z"
              />
            </svg>
          </div>

          <h2 className="text-lg font-semibold">Your cart is empty</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-6">
            Looks like you haven&apos;t added anything yet.
          </p>

          <Link href={"/products"}>
            <Button
              onClick={() => {
                window.location.reload();
              }}
              className="rounded-full bg-lime-600 hover:bg-lime-700 text-white px-6"
            >
              Start shopping
            </Button>
          </Link>
        </div>
      )}

      {/* FOOTER */}
      <div className="border-t px-5 py-4 space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between text-sm font-medium">
          <span>Subtotal:</span>
          <span>$180.00</span>
        </div>

        <Link href="/cart" className="block">
          <Button
            variant="outline"
            className="w-full rounded-full border-lime-600 text-lime-700 hover:bg-lime-50"
          >
            View cart
          </Button>
        </Link>

        <Link href="/checkout" className="block">
          <Button className="w-full rounded-full bg-lime-600 hover:bg-lime-700 text-white">
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
