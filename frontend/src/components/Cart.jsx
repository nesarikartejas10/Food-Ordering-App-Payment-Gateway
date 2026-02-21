import { IoMdClose } from "react-icons/io";

const Cart = () => {
  return (
    <aside className="fixed right-0 top-0 w-full lg:w-[25vw] h-full bg-white p-5">
      <div className="flex items-center justify-between my-3">
        <span className="text-xl font-bold text-gray-800">My Order</span>
        <IoMdClose className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer" />
      </div>

      <div className="absolute bottom-0">
        <h3 className="font-semibold text-gray-800">Item:</h3>
        <h3 className="font-semibold text-gray-800">Total Amount:</h3>
        <hr className="w-[88vw] lg:w-[22.3vw] my-2" />
        <button className="font-bold bg-green-500 text-white px-3 py-2 rounded-md w-[88vw] lg:w-[22.3vw] mb-5">
          Check Out
        </button>
      </div>
    </aside>
  );
};

export default Cart;
