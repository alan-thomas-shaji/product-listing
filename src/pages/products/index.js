import ProductCard from "@/components/ProductCard"
import Link from "next/link";
import Head from "next/head";

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
    <div>
      <Head>
        <title>Store</title>
      </Head>
      <div className="listing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>
  );
}

export default Products