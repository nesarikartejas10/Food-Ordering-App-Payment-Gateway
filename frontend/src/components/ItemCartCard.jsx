import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const ItemCartCard = ({ foodData }) => {
  const { img, name, price, qty } = foodData;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 shadow-md rounded-lg p-2 mb-3">
      <img src={img} alt={name} className="w-12.5 h-12.5" />

      <div className="w-full leading-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-800">{name}</h2>
          <MdDelete
            onClick={() => {
              dispatch(removeFromCart(foodData));
            }}
            size={17}
            className="text-gray-600 hover:text-red-500 transition-all ease-linear cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-500 font-bold">
            <MdCurrencyRupee />
            {price}
          </div>

          <div className="flex items-center gap-2">
            <FiMinusCircle
              size={17}
              className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <span>{qty}</span>
            <FiPlusCircle
              size={17}
              className="hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCartCard;
