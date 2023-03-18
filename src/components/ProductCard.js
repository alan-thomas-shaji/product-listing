
const ProductCard = ({title, price, description, imageLink}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 h-fit">
      <img className="w-fit" src={imageLink} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">
          {description.substring(0, 100)}
          <span className="px-2 text-blue-600 font-bold">...Know more</span>
        </p>
        <p className="text-blue-700 mb-2 text-2xl font-bold">
          &#36; {price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard