
import React from "react";
import ReactDOM from "react-dom"
import { PayPalButtons } from "@paypal/react-paypal-js";
import { createDataBaseOrder } from "../../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { BASE_URL } from "../../globalUrl/Urls";

const PaypalPayment = ({history}) =>  {
  const alert = useAlert();
  const dispatch = useDispatch()
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);

  const createOrder= async(data) => {
    // Order is created on the server and the order id is returned
    return fetch(`/api/v1/orders`, {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        cart: [
          {
            amount: orderInfo?.subtotal,
          },
        ],
      }),
    })
    .then((response) => response.json())
    .then((order) => order.id);
  }
  const onApprove = async (data) => {
     // Order is captured on the server
     return fetch(`/api/v1/orders/${data.orderID}/capture`, {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
    .then((response) => response.json()).then(item => {
      console.log(item, "data56")
      try {
            const Order = {
              shippingInfo,
              orderItems: cartItems,
              itemsPrice: orderInfo.subtotal,
              shippingPrice: orderInfo.shippingCharges,
              totalPrice: orderInfo.totalPrice,
            }
            if (item?.status === "COMPLETED") {
              Order.paymentInfo = {
                id: item?.id,
                status: item?.status,
              };
              dispatch(createDataBaseOrder(Order, history))
           }} catch (error) {
      alert.error("Something went wrong!");
    }
    });
  }
    return (
        <PayPalButtons  createOrder={(data, actions) => createOrder(data)}
        onApprove={(data, actions) => onApprove(data)} style={{ layout: "horizontal" }} />
    );
}

export default PaypalPayment