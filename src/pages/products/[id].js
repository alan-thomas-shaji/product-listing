import Head from "next/head";
import { Carousel } from "antd";
import PurchaseCard from "@/components/PurchaseCard";

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

const Details = ({product}) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="flex mt-20">
      <Head>
        <title>
          {product.title} in {product.category.name}
        </title>
      </Head>
      <div className="shadow-md w-5/12 p-1 rounded-md">
        <Carousel afterChange={onChange} autoplay>
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-md"
            />
          </div>
          <div>
            <img
              src={product.images[1]}
              alt={product.title}
              className="rounded-md"
            />
          </div>
          <div>
            <img
              src={product.images[2]}
              alt={product.title}
              className="rounded-md"
            />
          </div>
        </Carousel>
      </div>
      <div className="w-4/12">
        <div className="heading w-full p-2 border-spacing-2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
        <div className="description mt-2 text-lg p-2">
          <p>{product.description}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quisquam error iste soluta dignissimos nobis maxime pariatur vitae iusto quos obcaecati aliquid ut quo, facilis ipsa in voluptas quaerat. Suscipit.</p>
        </div>
        <div className="price mt-2 p-2 font-bold text-blue-500 flex">
          <span className="text-md px-1">&#36;</span>
          <p className="text-3xl">{product.price}</p>
          <span className="text-md px-1">00</span>
        </div>
        <div className="categories p-2">
            <p className="text-xl">
              Categories:{" "}
              <span className="border-2 rounded-md p-2 text-lg hover:bg-blue-500 hover:text-white duration-150">
                {product.category.name}
              </span>
            </p>
        </div>
      </div>
      <div className="w-3/12">
        <PurchaseCard price={product.price} />
      </div>
    </div>
  );
}

export default Details