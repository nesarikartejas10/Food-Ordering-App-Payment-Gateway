import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  razorpayApiKey: process.env.RAZORPAY_API_KEY,
  razorpayApiSecret: process.env.RAZORPAY_API_SECRET,
};

export const config = Object.freeze(_config);
