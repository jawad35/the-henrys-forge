// import React from "react";
// import ReactDOM from "react-dom";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { createDataBaseOrder } from "../../actions/orderAction";
// import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";
// import axios from "axios";

// const StripePayment = ({ history }) => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const stripe = useStripe();
//   const elements = useElements();
//   const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     try {
//       const { data: clientSecret } = await axios.post("/api/v1/payment", {
//         amount: Math.round(orderInfo.totalPrice * 100), // Stripe works with the smallest currency unit (cents for USD)
//       });

//       const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//           billing_details: {
//             name: shippingInfo.name,
//             email: shippingInfo.email,
//             address: {
//               line1: shippingInfo.address,
//               city: shippingInfo.city,
//               state: shippingInfo.state,
//               postal_code: shippingInfo.postalCode,
//               country: shippingInfo.country,
//             },
//           },
//         },
//       });

//       if (paymentResult.error) {
//         alert.error(paymentResult.error.message);
//       } else {
//         if (paymentResult.paymentIntent.status === "succeeded") {
//           const Order = {
//             shippingInfo,
//             orderItems: cartItems,
//             itemsPrice: orderInfo.subtotal,
//             shippingPrice: orderInfo.shippingCharges,
//             totalPrice: orderInfo.totalPrice,
//             paymentInfo: {
//               id: paymentResult.paymentIntent.id,
//               status: paymentResult.paymentIntent.status,
//             },
//           };

//           dispatch(createDataBaseOrder(Order, history));
//         } else {
//           alert.error("Payment failed. Please try again.");
//         }
//       }
//     } catch (error) {
//       alert.error(error.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay Now
//       </button>
//     </form>
//   );
// };

// export default StripePayment;
