import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const OrderSuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {loading ? (
        <PropagateLoader color="#4caf50" />
      ) : (
        <>
          <FaRegCheckCircle size={80} color="#4caf50" cl />
          <h2 className="text-3xl font-semibold my-4">
            Thank You for Your Order!
          </h2>
          <p className="text-gray-600 text-lg mb-2 text-center">
            Your order has been successfully placed.
          </p>
          <p className="text-gray-600 text-base text-center">
            We’ll notify you once it has been shipped.
          </p>
          <button
            className="p-1.5 text-white bg-green-500 hover:bg-green-600 rounded-md text-xl mt-4 font-semibold"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
};

export default OrderSuccessPage;
