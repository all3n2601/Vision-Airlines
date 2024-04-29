const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const payments = new Schema({
  paymentsID: { type: String, required: true },
  paymentType: {},
});

const PaymentsSchema = mongoose.model("Payments", payments, "payments");
module.exports = PaymentsSchema;
