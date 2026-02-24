import express from "express";
import paymentRouter from "./routes/payment.routes.js";

const app = express();
app.use(express.json());

app.use("/api/v1", paymentRouter);

export default app;
