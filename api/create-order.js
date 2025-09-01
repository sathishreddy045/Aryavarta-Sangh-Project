import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { amount, name, email, phone } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ success: false, message: "Invalid amount" });
  }

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
    notes: { name, email, phone }, 
  };

  try {
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).json({ success: false, message: "Error creating order" });
    }
    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
