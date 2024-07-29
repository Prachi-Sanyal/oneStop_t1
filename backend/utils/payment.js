const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });

  return paymentIntent;
};

module.exports = { createPaymentIntent };
