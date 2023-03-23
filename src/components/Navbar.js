import Link from "next/link"
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";

const Navbar = () => {
  const products = useContext(ProductsContext);
  return (
    <div>
      <nav className="navbar fixed py-0 bg-blue-500 w-full top-0 left-0 z-10 tablet:flex tablet:justify-center mobile:flex mobile:justify-center">
        <div className="container flex mobile:flex-col desktop:mx-auto tablet:flex-row tablet:p-4 tablet:flex tablet:justify-between items-center px-4">
          <div>
            <Link href="/">
              <div className="text-white font-bold text-xl mobile:py-2">
                My Next.js Shopping App
              </div>
            </Link>
          </div>
          <div className="search mobile:w-full desktop:w-6/12 desktop:flex desktop:justify-center">
            <SearchBar products={products} />
          </div>
          <div className="flex p-2">
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