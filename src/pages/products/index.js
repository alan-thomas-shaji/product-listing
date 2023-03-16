import ProductCard from "@/components/ProductCard"

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
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
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            imageLink={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products