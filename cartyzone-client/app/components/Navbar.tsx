import Image from "next/image";
import Link from "next/link";

// other imports
import { Handbag, Menu, X } from "lucide-react";
import { CartButton } from "./Cart";

const Navbar = () => {
  return (
    <div className="navbar  pt-3 ">
      <Link href="/">
        <div className="logo mx-4">
          <Image
            src={"/Logo.png"}
            alt="cartyzone logo"
            width={40}
            height={40}
            className="h-auto"
          />
          <div className="logo_name text-xl">
            <span className="text-green-700">Carty</span>
            <span className="text-green-400">zone</span>
          </div>
        </div>
      </Link>
      <div className="nav-content flex  z-50">
        <CartButton>
          <Handbag />
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
