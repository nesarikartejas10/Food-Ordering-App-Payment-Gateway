import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  return <div>{cartItems.length > 0 ? children : <Navigate to="/" />}</div>;
};

export default ProtectedRoute;
