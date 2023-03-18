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
        <div className="heading">
            <h1 className="text-xl">{product.title}</h1>
        </div>
    </div>
  )
}

export default Deatils