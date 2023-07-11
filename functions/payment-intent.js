require('dotenv').config();

const stripe = require('stripe')(process.env.VITE_STRIPE_KEY_PRI);

export async function handler(event, context) {
  if (event.body) {
    const { cart, shippingCharges, totalAmount } = JSON.parse(event.body);

    const calculateOrderAmount = () => {
      return shippingCharges + totalAmount;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      };
    }
  }

  return {
    statusCode: 200,
    body: 'payment intent',
  };
}
