import { Button } from "antd"

const PurchaseCard = ({price}) => {
  return (
    <div className="w-full p-2">
      <div className="price mt-2 font-bold text-black flex">
        <span className="text-md px-1">&#36;</span>
        <p className="text-3xl">{price}</p>
        <span className="text-md px-1">00</span>
      </div>
      <div className="stock">
        <p className="text-xl p-2 text-green-700">In stock</p>
      </div>
      <div className="p-2">
        <Button type="primary" block className="bg-blue-500">
          Buy this now
        </Button>
        <Button type="primary" block className="bg-white border-blue-500 text-black mt-3">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default PurchaseCard