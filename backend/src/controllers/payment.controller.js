import { razorpayInstance } from "../config/razorpay.js";

export const createOrder = async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpayInstance.orders.create(options);

    return res.status(200).json({ success: true, order });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};
