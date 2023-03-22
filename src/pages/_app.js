import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useState, useContext } from "react";
import { ProductsProvider, ProductsContext } from "@/context/ProductsContext";

export default function App({ Component, pageProps }) {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [products, setProducts] = useContext(ProductsContext);
  return (
    <ProductsProvider value={[products, setProducts]}>
      <Layout>
        <Component
          {...pageProps}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Layout>
    </ProductsProvider>
  );
}
