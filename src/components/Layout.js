import Navbar from "./Navbar";
import { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";

const Layout = ({ children }) => {
  const products = useContext(ProductsContext);
  return (
    <div>
        <Navbar products={products} />
        { children }
    </div>
  );
}

export default Layout