import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { FaRegCheckCircle } from "react-icons/fa";

const OrderSuccessPage = () => {
  const [loading, setLoading] = useState(true);

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
        </>
      )}
    </div>
  );
};

export default OrderSuccessPage;
