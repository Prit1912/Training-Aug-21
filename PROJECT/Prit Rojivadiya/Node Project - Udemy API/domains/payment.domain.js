require("dotenv").config();

const checksum_lib = require("./Paytm/checksum");
const config = require("./Paytm/config");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");

var instance = new Razorpay({
  key_id: 'rzp_test_xfHB8uNca5sUFH',
  key_secret: 'LcQRMwJJIgf2YGRjrPlKEfCe',
});

// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
// const { payments } = require("../models/payment.model");

class PaymentDomain {
  // get all payments
  async getAllPayments(req, res) {
    const payment = await payments.find();
    if (payment.length == 0) {
      return res.send("not payments yet");
    }
    res.send(payment);
  }

  // get payment by id
  async getPaymentById(req, res) {
    const payment = await payments
      .findOne({ _id: req.params.id })
      .populate("user", "-password");
    if (!payment) return res.status(404).send("no payment found");
    res.send(payment);
  }

  // make payment
  async addPayment(req, res) {
    // var options = {
    //   amount: req.body.amount,  // amount in the smallest currency unit
    //   currency: "INR",
    //   receipt: "order_rcptid_11"
    // };
    // instance.orders.create(options, function(err, order) {
    //   console.log(order);
    //   res.send({orderId: order.id})
    // });
    const payment_capture = 1;
    const amount = req.body.amount;
    const currency = "INR";
  
    const options = {
      amount,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

      instance.orders.create(options, function(err, order) {
      console.log(order);
      res.send({id: order.id,
        currency: order.currency,
        amount: order.amount,})
    });
  }

  // callback function
  async callback(req, res) {
      console.log('callback called')
      const secret = "razorpaysecret";

      console.log(req.body);
    
      const shasum = crypto.createHmac("sha256", secret);
      shasum.update(JSON.stringify(req.body));
      const digest = shasum.digest("hex");
    
      console.log(digest, req.headers["x-razorpay-signature"]);
    
      if (digest === req.headers["x-razorpay-signature"]) {
        console.log("request is legit");
        res.status(200).json({
          message: "OK",
        });
      } else {
        res.status(403).json({ message: "Invalid" });
      }
  }

  // update payment
  async updatePayment(req, res) {
    const payment = await payments.findOne({ _id: req.params.id });
    if (!payment) return res.status(404).send("no payment found");
    const newPayment = await payments.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.send(newPayment);
  }

  // delete payment
  async deletePayment(req, res) {
    const payment = await payments.findOne({ _id: req.params.id });
    if (!payment) return res.status(404).send("no payment found");
    const p = await payments.findByIdAndDelete(req.params.id);
    res.send(p);
  }

  // get failed payments
  async getFailedPayments(req, res) {
    const payment = await payments.find({ payment_status: "Failed" });
    if (payment.length == 0) return res.status(404).send("no payments found");
    res.send(payment);
  }

  // get pending payments
  async getPendingPayments(req, res) {
    const payment = await payments.find({ payment_status: "Pending" });
    if (payment.length == 0) return res.status(404).send("no payments found");
    res.send(payment);
  }

  // get success payments
  async getSuccessPayments(req, res) {
    const payment = await payments.find({ payment_status: "Success" });
    if (payment.length == 0) return res.status(404).send("no payments found");
    res.send(payment);
  }
}

module.exports = PaymentDomain;
