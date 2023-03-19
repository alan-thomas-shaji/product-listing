import ProductCard from "@/components/ProductCard"
import Link from "next/link";
import Head from "next/head";
import SearchBar from "@/components/SearchBar";

export async function getStaticProps() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await response.json();

  return {
    props: {
      products
    },
  };
}

const Products = ({products}) => {
  return (
    <div className="flex w-full">
      <Head>
        <title>Store</title>
      </Head>
      <div className="listing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12">
        {products?.map((product) => (
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
      <div className="sidebar w-3/12 m-1 p-1">
        <SearchBar products={products} />
      </div>
    </div>
  );
}

export default Products