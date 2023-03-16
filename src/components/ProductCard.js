
const ProductCard = ({title, price, category, description, imageLink}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 h-fit">
      <img className="w-9/12" src={imageLink} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-700 text-base mb-2 bg-blue-300 rounded-lg text-center w-fit px-2 border-2 border-blue-600">
          {category}
        </p>
        <p className="text-gray-700 text-base mb-2 text-lb font-bold">&#36; {price}</p>
      </div>
    </div>
  );
}

export default ProductCard