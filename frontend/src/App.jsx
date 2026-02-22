import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
