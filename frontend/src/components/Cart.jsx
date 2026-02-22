import { IoMdClose } from "react-icons/io";
import ItemCartCard from "./ItemCartCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);
  return (
    <>
      <aside
        className={`fixed right-0 top-0 w-full lg:w-[25vw] h-full bg-white p-5 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 ease-linear z-40`}
      >
        <div className="flex items-center justify-between my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400 transition-all ease-linear cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <ItemCartCard key={item.id} foodData={item} />;
          })
        ) : (
          <h2 className="h-[50%] flex justify-center items-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Item:</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:</h3>
          <hr className="w-[88vw] lg:w-[22.3vw] my-2" />
          <button className="font-bold bg-green-500 text-white px-3 py-2 rounded-md w-[88vw] lg:w-[22.3vw] mb-5">
            Check Out
          </button>
        </div>
      </aside>
      <div onClick={() => setActiveCart(!activeCart)}>
        <FaShoppingCart className="text-5xl bg-white rounded-full shadow-md p-3 fixed bottom-2 right-2" />
        <span className="flex justify-center items-center text-xs font-bold text-white bg-red-600 w-4 h-4 rounded-full p-1 fixed bottom-11 right-3 z-20">
          {cartItems.length}
        </span>
      </div>
    </>
  );
};

export default Cart;
