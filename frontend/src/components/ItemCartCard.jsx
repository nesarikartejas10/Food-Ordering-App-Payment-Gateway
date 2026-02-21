import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { MdCurrencyRupee } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const ItemCartCard = () => {
  return (
    <div className="flex items-center gap-2 shadow-md rounded-lg p-2 mb-3">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-12.5 h-12.5"
      />

      <div className="w-full leading-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-800">Onion Pizza</h2>
          <MdDelete
            size={17}
            className="text-gray-600 hover:text-red-500 transition-all ease-linear cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-green-500 font-bold">
            <MdCurrencyRupee />
            120
          </div>

          <div className="flex items-center gap-2">
            <FiMinusCircle
              size={17}
              className="hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer"
            />
            <span>1</span>
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
