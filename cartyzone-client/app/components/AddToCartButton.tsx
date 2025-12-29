"use client";
import { Button } from "@/components/ui/button";
import useCartStore from "../store/cartStore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { cartItem } from "../store/cartStoreTypes";

const AddToCart = ({ product_id }: { product_id: string }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const setInitialCart = useCartStore((state) => state.setInitialCart);
  const [productQuantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify({ products: [] }));
    }
    if (localStorage.getItem("cart"))
      setInitialCart(JSON.parse(localStorage.getItem("cart")!)["products"]);
  }, []);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (productQuantity <= 0) {
      toast.error("quantity required");
      return;
    }

    //    update zustand
    addToCart({ product_id, quantity: productQuantity });

    // setup localStorage logic
    const localStore: { products: cartItem[] } = JSON.parse(
      localStorage.getItem("cart") || "{ `products`: [] }"
    );

    const existingProduct = localStore.products.length
      ? localStore.products.find((p) => p.product_id === product_id)
      : false;

    if (existingProduct)
      localStore.products = localStore.products.map((p) =>
        p.product_id === existingProduct.product_id
          ? { ...p, quantity: Number(p.quantity + productQuantity) }
          : p
      );

    // console.log({ existingProduct, localStore });

    if (!existingProduct)
      localStore.products.push({
        product_id,
        quantity: Number(productQuantity),
      });

    // console.log(localStore);
    localStorage.setItem("cart", JSON.stringify(localStore));
    // console.log(localStorage.getItem("cart"));
  };
  return (
    <div className="to-cart">
      <input
        onChange={(e) => setQuantity(Number(e.target.value))}
        type="number"
        name="quantity"
        min={0}
        value={productQuantity}
        id="prod-quantity"
        className="border border-gray-300 px-3 py-2 w-20 focus:outline-none focus:ring-1 focus:ring-gray-500"
      />
      <Button
        onClick={handleAddToCart}
        className="bg-lime-700 hover:bg-lime-900 text-white rounded-full px-6 py-2 ml-3"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
