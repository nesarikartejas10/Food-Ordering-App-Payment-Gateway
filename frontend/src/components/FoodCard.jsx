import { MdCurrencyRupee } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const FoodCard = () => {
  return (
    <div className="font-bold w-62.5 bg-white p-5 flex flex-col rounded-lg gap-3">
      <img
        className="w-auto h-32.5 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
      />

      <div className="text-sm flex justify-between items-center">
        <h2>Onion Pizza</h2>
        <span className="flex items-center text-green-500">
          <MdCurrencyRupee />
          180
        </span>
      </div>
      <p className="text-sm text-gray-600 font-normal">
        A delicious pizza topped with fresh onions for a delightful flavor
        combination.
      </p>
      <div className="flex items-center justify-between">
        <span className="flex items-center text-sm text-green-500">
          <AiFillStar className="mr-1" />
          4.5
        </span>
        <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
