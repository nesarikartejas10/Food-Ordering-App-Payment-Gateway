import { IoMdClose } from "react-icons/io";
import ItemCartCard from "./ItemCartCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router";
import { api } from "../api/axios";
import toast from "react-hot-toast";

const Cart = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    try {
      loadScript("https://checkout.razorpay.com/v1/checkout.js");
    } catch (error) {
      toast.error("Razorpay SDK failed to load");
      return;
    }
  }, []);
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0,
  );

  const navigate = useNavigate();

  const handleCheckout = async (amount) => {
    try {
      //create order
      const { data } = await api.post("/create-order", { amount });

      const order = data.order;

      const rzp = new window.Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        order_id: order.id,
        amount: order.amount,

        handler: async (response) => {
          console.log("HANDLER CALLED");
          console.log(response);

          try {
            const { data: verifyData } = await api.post("/verify-payment", {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });

            console.log("VERIFY RESPONSE:", verifyData);

            if (verifyData.success) {
              toast.success("Payment Successful");
              navigate("/order-success");
            } else {
              toast.error("Verification failed");
            }
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }
        },
        theme: {
          color: "#3399cc",
        },
      });
      rzp.open();
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong during checkout",
      );
    }
  };

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
          <h3 className="font-semibold text-gray-800">
            Item: {cartItems.length}
          </h3>
          <h3 className="font-semibold text-gray-800 flex items-center">
            Total Amount: <MdCurrencyRupee />
            {totalPrice}
          </h3>
          <hr className="w-[88vw] lg:w-[22.3vw] my-2" />
          <button
            onClick={() => handleCheckout(totalPrice)}
            className="font-bold bg-green-500 text-white px-3 py-2 rounded-md w-[88vw] lg:w-[22.3vw] mb-5"
          >
            Check Out
          </button>
        </div>
      </aside>

      <div
        onClick={() => setActiveCart(!activeCart)}
        className={`${totalQty > 0 ? "animate-bounce" : ""} fixed bottom-2 right-2 cursor-pointer`}
      >
        <FaShoppingCart
          fill="white"
          className="text-5xl bg-green-500 rounded-full shadow-md p-3"
        />

        {totalQty > 0 && (
          <span className="absolute -top-1 -right-1 flex justify-center items-center text-xs font-bold text-white bg-red-600 w-5 h-5 rounded-full">
            {totalQty}
          </span>
        )}
      </div>
    </>
  );
};

export default Cart;
