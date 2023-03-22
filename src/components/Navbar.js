import Link from "next/link"
import SearchBar from "./SearchBar";
import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "@/context/ProductsContext";

const Navbar = () => {
  const products = useContext(ProductsContext);
  return (
    <div>
      <nav className="navbar fixed py-0 bg-blue-500 w-full top-0 left-0 z-10">
        <div className="container mobile:flex-col desktop:mx-auto flex justify-between items-center px-4">
          <div>
            <Link href="/">
              <div className="text-white font-bold text-xl mobile:py-2">
                My Next.js Shopping App
              </div>
            </Link>
          </div>
          <div className="search mobile:w-full desktop:w-6/12">
            <SearchBar products={products} />
          </div>
          <div className="flex py-2">
            <Link href="/">
              <div className="hover:text-gray-300 text-white mr-4">Home</div>
            </Link>
            <Link href="/products">
              <div className="hover:text-gray-300 text-white">Products</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar