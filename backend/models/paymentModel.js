const payments = new Schema({
    paymentsID: { type: String, required: true },
    paymentType: {},
  });
  
  const paymentsSchema = mongoose.model("payments", payments, "payments");
  