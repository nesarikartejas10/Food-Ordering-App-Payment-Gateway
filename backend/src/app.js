import express from "express";
import paymentRouter from "./routes/payment.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/v1", paymentRouter);

export default app;
