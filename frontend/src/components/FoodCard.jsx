import { MdCurrencyRupee } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

const FoodCard = ({ foodData }) => {
  const { id, name, img, price, desc, rating } = foodData;
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-60 bg-white p-5 flex flex-col rounded-lg gap-3 shadow-md">
      <img
        className="w-auto h-32.5 hover:scale-110 rounded-lg overflow-hidden cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt={name}
      />

      <div className="text-sm flex justify-between items-center">
        <h2>{name}</h2>
        <span className="flex items-center text-green-500">
          <MdCurrencyRupee />
          {price}
        </span>
      </div>
      <p className="text-sm text-gray-600 font-normal">
        {desc.slice(0, 50)}...
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="flex items-center text-sm">
          <AiFillStar className="text-yellow-400 mr-1" />
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ ...foodData, qty: 1 }));
            toast.success(`${name} Added`);
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
