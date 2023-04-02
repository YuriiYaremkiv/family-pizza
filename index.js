import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import { data } from "./data.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

app.post("/order", async (req, res) => {
  try {
    const { name, email, phone, orders, price } = req.body;
    const message = data({ name, email, phone, orders, price });
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: "y.yaremkiv@gmail.com",
      subject: "Your pizza is good!",
      html: message,
    };

    await sgMail.send(msg);

    res.status(201).json({ message: "Succes" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
