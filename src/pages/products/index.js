import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import Head from "next/head";
import FilterCategory from "@/components/FilterCategory";

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
  const filteredProducts =
    selectedCategory && selectedCategory.id
      ? products.filter(
          (product) => product.category.id === selectedCategory.id
        )
      : products;

  return (
    <div className="">
      <Head>
        <title>Store</title>
      </Head>
      <div className="flex w-full mt-16">
        <div className="listing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12">
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
        <div className="sidebar fixed top-20 right-0 w-3/12 mt-1 p-1">
          <FilterCategory
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
