const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Required to parse JSON from form data

const razorpay = new Razorpay({
  key_id: process.env.REACT_APP_RAZORPAY_KEY_ID,
  key_secret: process.env.REACT_APP_RAZORPAY_KEY_SECRET,
});

// 🟢 Razorpay order route (unchanged)
app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // Convert to paise
      currency: "INR",
      receipt: "receipt#1",
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ New Route: Email Notification After Payment
app.post("/send-email", async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    city,
    postalCode,
    country,
    totalQty,
    totalAmount,
  } = req.body;

  const output = `
    <h2>New Order Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}, ${city}, ${postalCode}, ${country}</p>
    <p><strong>Total Quantity:</strong> ${totalQty}</p>
    <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,      // Your Gmail (App Password)
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Shrinath Furnitures" <${process.env.GMAIL_USER}>`,
    to: "selvapriya0017@gmail.com", // 📌 Replace with real admin email
    subject: "New Order Details",
    html: output,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// 🔚 Server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
