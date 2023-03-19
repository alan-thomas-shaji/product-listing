import Head from "next/head";
import { Carousel } from "antd";

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
    <div className="">
      <Head>
        <title>
          {product.title} in {product.category.name}
        </title>
      </Head>
      <center>
        <div className="mx-auto shadow-lg w-full">
          <Carousel afterChange={onChange} className="mx-auto" autoplay>
            <div>
              <img src={product.images[0]} alt={product.title} />
            </div>
            <div>
              <img src={product.images[1]} alt={product.title} />
            </div>
            <div>
              <img src={product.images[2]} alt={product.title} />
            </div>
          </Carousel>
        </div>
      </center>

      {/* </div> */}
      <div className="heading w-full p-2 border-spacing-2 flex justify-center">
        <h1 className="text-3xl font-bold">{product.title}</h1>
      </div>
      <div className="description mt-2 flex justify-center">
        <p>{product.description}</p>
      </div>
      <div className="price mt-2 flex justify-center">
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default Details