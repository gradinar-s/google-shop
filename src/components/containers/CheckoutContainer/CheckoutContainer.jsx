import React from "react";

import { connect } from "react-redux";
import {
  closeWindowCheckout,
  setWindowClosingProcess,
  sendMessageTelegramBot,
  setMessageSendStatus,
} from "../../../redux/appReducer";

import Checkout from "../../presentations/Сheckout/Сheckout";

const CheckoutContainer = (props) => {
  // Popup
  const closePopup = () => {
    const ANIMATION_TIME = 210;
    props.setWindowClosingProcess(true);
    setTimeout(() => {
      props.closeWindowCheckout();
      props.setWindowClosingProcess(false);
      props.setMessageSendStatus(false); // Hide successful order notification
    }, ANIMATION_TIME);
  };

  const orderFormValidation = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const onSubmitOrderForm = (data) => {
    props.sendMessageTelegramBot(data);
  };

  return (
    <Checkout
      onSubmitOrderForm={onSubmitOrderForm}
      orderFormValidation={orderFormValidation}
      closePopup={closePopup}
      isOpenCheckout={props.isOpenCheckout}
      isMessageSentSuccess={props.isMessageSentSuccess}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isOpenCheckout: state.app.isOpenCheckout,
    isMessageSentSuccess: state.app.isMessageSentSuccess,
  };
};
export default connect(mapStateToProps, {
  closeWindowCheckout,
  setWindowClosingProcess,
  sendMessageTelegramBot,
  setMessageSendStatus,
})(CheckoutContainer);
