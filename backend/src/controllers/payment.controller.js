import { config } from "../config/envConfig.js";
import { razorpayInstance } from "../config/razorpay.js";
import crypto from "node:crypto";

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

export const verifyPayment = async (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const secret = config.razorpayApiSecret;

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(order_id + "|" + payment_id);

  const generatedSignature = hmac.digest("hex");

  if (generatedSignature === signature) {
    return res.status(200).json({ success: true, message: "Payment verified" });
  }
  return res.status(400).json({
    success: false,
    message: "Invalid signature! Payment not verified",
  });
};
