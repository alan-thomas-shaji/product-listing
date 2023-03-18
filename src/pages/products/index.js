import ProductCard from "@/components/ProductCard"
import Link from "next/link";

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
      <div className="text-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <div>Searchbar</div>
      </div>
      <div className="listing grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard
              title={product.title}
              price={product.price}
              description={product.description}
              imageLink={product.images[1]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products