import Ratings from "./Ratings";

const ProductCard = ({title, price, description, imageLink}) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg mt-4 text-center min-h-full justify-between">
      <img className="w-fit" src={imageLink} alt={title} />
      <div className="px-6 py-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-2 flex flex-col">
            {description.substring(0, 50)}
            <span className="px-2 text-blue-600 font-bold">...Know more</span>
          </p>
        </div>
        <div className="mobile:flex mobile:justify-between tablet:justify-start tablet:flex-col">
          <p className="text-blue-700 mb-2 text-3xl font-bold">&#36; {price}</p>
          <div className="tablet:flex tablet:justify-center">
            <Ratings score={Math.random() * 5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard