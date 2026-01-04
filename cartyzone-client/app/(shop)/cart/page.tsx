"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCartStore from "@/app/store/cartStore";
import { cartItem } from "@/app/store/cartStoreTypes";
import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import { addedFee, baseUrl, fetchData } from "@/lib/utils";
import { Product } from "@/app/types/product";
import toast from "react-hot-toast";
import LoadingUI from "@/app/components/LoadingUi";
import CheckoutSkeleton from "@/app/components/CheckOutSkeleton";
import EmptyCart from "@/app/components/EmptyCart";
// import { useState } from "react";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setInitialCart);
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await fetchData(`${baseUrl}products`, true);
      if (products) {
        setLoading(false);
        setProducts(products);
      }
      if (!products) {
        setLoading(false);
        setProducts([]);
        toast.error("Something went wrong while fetching cart products");
      }
    };
    fetchProducts();
  }, []);
  const ids = new Set(cart.products.map((p) => p.product_id));
  const filteredProducts = products.filter((p) => ids.has(p.id));
  const removeProduct = useCartStore((state) => state.removeFromCart);
  // console.log(filteredProducts);
  const handleRemove = (id: string) => {
    const localStore: { products: cartItem[] } = JSON.parse(
      localStorage.getItem("cart")!
    );
    // console.log(localStore);
    // console.log(localStore.products.filter((p) => p.product_id !== id));
    const updatedCart = localStore.products.filter((p) => p.product_id !== id);
    localStorage.setItem(
      "cart",
      JSON.stringify({ products: [...updatedCart] })
    );

    removeProduct(id);
  };

  // console.log(cart);
  const handleUpdateCart = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    // console.log(e.target.value);
    const newCart = cart.products.filter((p) => p.product_id !== id);
    if (Number(e.target.value) <= 0) {
      // console.log(newCart);
      localStorage.setItem("cart", JSON.stringify({ products: newCart }));
      setCart(newCart);
    } else {
      const localCart: { products: cartItem[] } = JSON.parse(
        localStorage.getItem("cart")!
      );
      const editedCart = localCart.products.map((p) =>
        p.product_id === id ? { ...p, quantity: Number(e.target.value) } : p
      );
      // console.log(editedCart);
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [...editedCart] })
      );

      setCart(editedCart);
    }
  };

  return (
    <>
      {cart.products.length === 0 && <EmptyCart />}
      {cart.products.length > 0 && (
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
                {loading && <LoadingUI />}
                {!loading &&
                  filteredProducts.map((p) => (
                    <div
                      className="grid grid-cols-6 items-center px-4 py-4 border-b"
                      key={p.id}
                    >
                      {/* Remove */}
                      <button
                        className="text-gray-400 hover:text-black"
                        onClick={() => {
                          handleRemove(p.id);
                        }}
                      >
                        <X size={18} />
                      </button>

                      {/* Product */}
                      <div className="col-span-2 flex items-center gap-4">
                        <Image
                          src={p.product}
                          alt={p.name + " image"}
                          width={60}
                          height={60}
                          className="rounded border"
                        />
                        <span className="text-lime-600 font-medium">
                          {p.name}
                        </span>
                      </div>

                      {/* Price */}
                      <div>{p.price}</div>

                      {/* Quantity */}
                      <input
                        type="number"
                        // min={1}
                        onChange={(e) => {
                          handleUpdateCart(e, p.id);
                        }}
                        defaultValue={
                          cart.products.find((prod) => prod.product_id === p.id)
                            ?.quantity
                        }
                        className="w-16 border px-2 py-1 text-center"
                      />

                      {/* Subtotal */}
                      <div className="font-medium">
                        GHS{" "}
                        {(
                          cart.products.find((prod) => prod.product_id === p.id)
                            ?.quantity! * p.price
                        ).toFixed(2)}
                      </div>
                    </div>
                  ))}

                {/* Coupon row */}
                {/* <div className="flex flex-wrap items-center gap-3 px-4 py-4">
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
            </div> */}
              </div>
            </div>

            {/* RIGHT: CART TOTALS */}
            <div className="border rounded-md p-6 h-fit">
              {loading && <CheckoutSkeleton />}
              {!loading && (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Cart totals</h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>
                        GHS{" "}
                        {filteredProducts
                          .reduce((total, product) => {
                            const cartItem = cart.products.find(
                              (item) => item.product_id === product.id
                            );

                            if (!cartItem) return total;

                            return Number(
                              total + product.price * cartItem.quantity
                            );
                          }, 0)
                          .toFixed(2)}
                      </span>
                    </div>

                    <div className="border-t pt-4 flex justify-between font-medium">
                      <span>Total</span>
                      <span>
                        GHS{" "}
                        {Number(
                          filteredProducts
                            .reduce((total, product) => {
                              const cartItem = cart.products.find(
                                (item) => item.product_id === product.id
                              );

                              if (!cartItem) return total;

                              return Number(
                                total + product.price * cartItem.quantity
                              );
                            }, 0)
                            .toFixed(2)
                        ) + Object.values(addedFee).reduce((a, b) => a + b, 0)}
                      </span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button className="mt-6 w-full rounded-full bg-lime-600 hover:bg-lime-700 text-white py-6">
                      Proceed to checkout
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
