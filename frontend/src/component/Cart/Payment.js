import React, { Fragment} from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
// import { PayPalButton } from 'react-paypal-button-v2'
import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import "./payment.css";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../actions/orderAction";
import PaypalPayment from "../Order/PaypalPayment";
const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  // const shippingInfo = JSON.parse(sessionStorage.getItem("shippingInfo"));
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const alert = useAlert();
  const dispatch = useDispatch()
  // const SuccessHandler = (details, data) => {
  //   try {
  //     const Order = {
  //       shippingInfo,
  //       orderItems: cartItems,
  //       itemsPrice: orderInfo.subtotal,
  //       shippingPrice: orderInfo.shippingCharges,
  //       totalPrice: orderInfo.totalPrice,
  //     }
  //     if (details.status === "COMPLETED") {
  //       Order.paymentInfo = {
  //         id: details.id,
  //         status: details.status,
  //       };

  //       dispatch(createOrder(Order));
  //       // // localStorage.removeItem("cartItems")
  //       // sessionStorage.removeItem("orderInfo")
  //       // localStorage.removeItem("shippingInfo")
  //       history.push("/success");
  //     } else {
  //       alert.error("There's some issue while processing payment ");
  //     }
  //   } catch (error) {
  //     alert.error(error.response.data.message);
  //   }
  // }
  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <div className="" style={{position:'static', height:'auto'}}>
      <PaypalPayment history={history} />
          {/* <PayPalButton
            amount={orderInfo.totalPrice}
            options={{
              clientId:
                "AZW9WgswGTvvjDQ3zwxftBUTlXNIvz3f2YZrjRHxWxBJjhkoPDU8ybQF0TsPtN17PWtNuoqsIFdz-1Pj"
            }}
            onSuccess={(details, data) => {
              SuccessHandler(details, data)
            }}

          /> */}
        </div>
        {/* <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - $${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form> */}
      </div>
    </Fragment>
  );
};

export default Payment;
