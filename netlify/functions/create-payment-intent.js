require('dotenv').config();
const stripe = require('stripe')('sk_test_51Kx7ZCFcH3NG50v46Oo5M7xyRbYhiKYrIJA2yVGXcWJNS75tSZjg8lqAcf0EDSM86GXpypzy3QBwV6zcVfIDV7s300pjpEYcYN');

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};