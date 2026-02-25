import { razorpayInstance } from "../config/razorpay.js";

export const createOrder = (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: Number(amount * 100),
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        return res
          .status(500)
          .json({ success: false, message: "Failed to create order" });
      }
      return res.status(200).json({ success: true, order });
    });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};
