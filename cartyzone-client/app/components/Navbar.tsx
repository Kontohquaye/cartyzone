import Image from "next/image";
import Link from "next/link";

// other imports
import { Handbag, Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar  pt-3 ">
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
      <div className="nav-content z-50">
        <input type="checkbox" name="menu" id="menu" />
        <label htmlFor="menu" className="menu-open mx-4">
          <Menu className="menu-icon" />
        </label>
        <label htmlFor="menu" className="menu-close mx-4">
          <X className="menu-icon-x" />
        </label>

        <div className="nav-items mr-4 " id="items">
          <Link href={"/"}>Home</Link>
          <Link href={"#"}>Shop</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"} className="flex  gap-1">
            <Handbag /> Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
