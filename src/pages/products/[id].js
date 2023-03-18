import Head from "next/head";

export const getStaticPaths = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();

    const paths = data.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const product = await response.json();

    return {
        props: {
            product
        }
    }
}

const Deatils = ({product}) => {
  return (
    <div>
      <Head>
        <title>
          {product.title} in {product.category.name}
        </title>
      </Head>
      <div className="img-container flex justify-center shadow-lg">
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="heading w-full p-2 border-spacing-2 flex justify-center">
        <h1 className="text-3xl">{product.title}</h1>
      </div>
      <div className="description mt-2 flex justify-center">
        <p>{product.description}</p>
      </div>
      <div className="price mt-2 flex justify-center">
        <p>${product.price}</p>
      </div>
      <div className="images-extra">
        <div className="">
          <h1>All Images of the product</h1>
        </div>
        <div className="img-cont p-1 flex">
          {product.images.map((image) => (
            <div key={image} className="image-extra w-4/12">
              <img src={image} alt={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deatils