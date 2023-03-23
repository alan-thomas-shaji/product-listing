import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Head from "next/head";
import FilterCategory from "@/components/FilterCategory";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "antd";
import { useState } from "react";

export async function getStaticProps() {
  const response1 = await fetch("https://api.escuelajs.co/api/v1/products");
  const response2 = await fetch("https://api.escuelajs.co/api/v1/categories");
  const products = await response1.json();
  const categories = await response2.json();

  return {
    props: {
      products,
      categories,
    },
  };
}

const Products = ({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidemenu = () => {
    setSidebarOpen(prev => !prev);
  };
  const filteredProducts =
    selectedCategory && selectedCategory.id
      ? products.filter(
          (product) => product.category.id === selectedCategory.id
        )
      : products;

  return (
    <div className="tablet:mt-28 mobile:mt-36 desktop:mt-20">
      <Head>
        <title>Store</title>
      </Head>
      <div className="hamburger fixed p-1 rounded-md bg-white hover:scale-105 duration-150 flex flex-col items-center justify-center text-center mobile:block tablet:hidden">
        <Button className="border-none" onClick={handleSidemenu}>
          <MenuIcon />
        </Button>
        <div className={` ${sidebarOpen ? "hidden" : "block"}`}>
          <FilterCategory
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
      <div className="flex w-full mobile:justify-center tablet:justify-start tablet:ml-2">
        <div className="listing grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 tablet:w-9/12 mobile:w-11/12">
          {filteredProducts?.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="hover:scale-105 duration-150"
            >
              <ProductCard
                title={product.title}
                price={product.price}
                description={product.description}
                imageLink={product.images[0]}
              />
            </Link>
          ))}
        </div>
        <div
          className={`sidebar fixed right-0 w-3/12 tablet:mt-1 p-2 mobile:hidden tablet:block ${
            sidebarOpen ? "block" : "hidden"
          }`}
        >
          <FilterCategory
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            className="fixed"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
