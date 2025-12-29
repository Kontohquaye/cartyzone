"use client";
import Image from "next/image";
import Link from "next/link";

// other imports
import { Handbag, Menu, X } from "lucide-react";
import { CartButton } from "./Cart";
import useCartStore from "../store/cartStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  // console.log(cart);
  const products = Object.values(cart.products).flat();
  // console.log(products);
  const quantity = products.reduce((sum, current) => sum + current.quantity, 0);
  // const quantity = 6;
  return (
    <div className="navbar  pt-3 ">
      <Link href="/">
        <div className="logo mx-4">
          <Image
            src={"/Logo.png"}
            alt="cartyzone logo"
            width={40}
            height={40}
            className="h-auto w-auto"
          />
          <div className="logo_name text-xl">
            <span className="text-green-700">Carty</span>
            <span className="text-green-400">zone</span>
          </div>
        </div>
      </Link>
      <div className="nav-content flex  z-50">
        <CartButton>
          <Handbag className="w-6 h-6" />

          {/* Cart count badge */}
          <span className="absolute -top-2 -right-2 bg-lime-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            {quantity < 100 ? quantity : `99+`}
          </span>
        </CartButton>
        <input type="checkbox" name="menu" id="menu" />
        <label htmlFor="menu" className="menu-open mr-4 ">
          <Menu className="menu-icon" />
        </label>
        <label htmlFor="menu" className="menu-close mr-4">
          <X className="menu-icon-x" />
        </label>

        <div className="nav-items sm:mr-4 " id="items">
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Shop</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
