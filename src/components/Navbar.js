import Link from "next/link"
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";

const Navbar = () => {
  const products = useContext(ProductsContext)
  return (
    <nav className="fixed py-4 bg-blue-500 w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link href="/">
            <div className="text-white font-bold text-xl">
              My Next.js Shopping App
            </div>
          </Link>
        </div>
        <div className="search w-6/12">
          <SearchBar products={products} />
        </div>
        <div className="flex">
          <Link href="/">
            <div className="hover:text-gray-300 text-white mr-4">Home</div>
          </Link>
          <Link href="/products">
            <div className="hover:text-gray-300 text-white">Products</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar