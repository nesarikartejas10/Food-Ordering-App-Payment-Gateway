import Razorpay from "razorpay";
import { config } from "./envConfig.js";

export const razorpayInstance = new Razorpay({
  key_id: config.razorpayApiKey,
  key_secret: config.razorpayApiSecret,
});
